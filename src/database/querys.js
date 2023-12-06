export const queries = {
    
    //RESIDENTES
    verResidentePorId: "SELECT * FROM Residentes Where Id = @id ",
    deleteProductById: "DELETE FROM [geriatrico].[dbo].[Products] WHERE Id = @id",
    verTodosLosResidentes: "SELECT * FROM Residentes",
    crearNuevoResidente: 'INSERT INTO Residentes (Nombre, Apodo, Apellido, Dni, ObraSocial,NumeroDeAfiliado,  Sexo, Nacionalidad, EstadoCivil,FechaDeAdmision, FechaDeNacimiento, UltimoDomicilio , Planta,Estado, Observaciones) VALUES (@Nombre, @Apodo, @Apellido, @Dni, @ObraSocial,@NumeroDeAfiliado,  @Sexo, @Nacionalidad, @EstadoCivil,@FechaDeAdm, @FechaDeNac, @UltimoDomicilio , @Planta,@Estado, @Observaciones);SELECT SCOPE_IDENTITY() as IdRespuesta',
    actualizarResidente: 'UPDATE Residentes SET Nombre = @Nombre ,Apellido = @Apellido ,Apodo = @Apodo ,Estado = @Estado ,FechaDeAdmision = @FechaDeAdmision ,FechaDeNacimiento = @FechaDeNacimiento ,Sexo = @Sexo ,Nacionalidad = @Nacionalidad ,EstadoCivil = @EstadoCivil ,Dni = @Dni ,UltimoDomicilio = @UltimoDomicilio ,ObraSocial = @ObraSocial ,NumeroDeAfiliado = @NumeroDeAfiliado ,Planta = @Planta ,Observaciones = @Observaciones where Id = @Id; SELECT Id From Residentes Where Id = @Id',
    subirFotoPerfil: 'UPDATE Residentes SET Foto = @Foto Where Id = @id',
    
    
    //RESPONSABLES
    verResponsablePorId: 'SELECT * from Responsables where Id = @Id',
    verResponsablePorResidente:'SELECT re.* from Residentes r left join ResponsablePorResidente rpr on r.Id = rpr.ResidenteId  left join Responsables re on rpr.ResponsableId = re.Id Where r.Id = @id',
    crearNuevoResponsable: 'INSERT INTO Responsables (Nombre, Apellido, Direccion, Email, FechaDeNacimiento, Sexo, Nacionalidad, EstadoCivil, Dni, Telefono, Profesion, Parentesco, Principal) VALUES (@Nombre, @Apellido, @Direccion, @Email, @FechaDeNacimiento, @Sexo, @Nacionalidad, @EstadoCivil, @Dni, @Telefono, @Profesion, @Parentesco, @Principal);DECLARE @IdRespuesta int; SELECT @IdRespuesta = SCOPE_IDENTITY(); INSERT INTO ResponsablePorResidente (ResidenteId, ResponsableId) VALUES (@ResidenteId, @IdRespuesta)',
    actualizarResponsable: 'UPDATE Responsables SET Nombre = @Nombre, Apellido = @Apellido, Direccion = @Direccion, Email = @Email, FechaDeNacimiento = @FechaDeNacimiento, Sexo = @Sexo, Nacionalidad = @Nacionalidad, EstadoCivil = @EstadoCivil, Dni = @Dni, Telefono = @Telefono, Profesion = @Profesion, Parentesco = @Parentesco, Principal = @Principal  where Id = @ResponsableId; SELECT r.Id from Responsables re left join ResponsablePorResidente rpr on re.Id = rpr.ResponsableId  left join Residentes r on rpr.ResidenteId = r.Id Where re.Id = @ResponsableId ',
    eliminarResponsable: 'SELECT r.Id from Responsables re  left join ResponsablePorResidente rpr on re.Id = rpr.ResponsableId   left join Residentes r on rpr.ResidenteId = r.Id  Where re.Id = @ResponsableId; Delete From ResponsablePorResidente Where ResponsableId = @ResponsableId; DELETE From Responsables Where Id = @ResponsableId;  ',
   
   //PRESCRIPCIONES
    verTodasLasPrescripciones: "SELECT * from Prescripciones",
    verPrescripcionesPorResidente: "SELECT P.*, v.NombreDroga, v.NombreComercial,  vudm.Unidad FROM  Prescripciones P  inner join VADEMECUM V on p.IdMedicamento = v.id   INNER JOIN VADEMECUMMEDICACIONES VM ON V.id = VM.VademecumId inner join VademecumUnidadesDeMedida vudm on vudm.id = vm.UnidadMedidaId and P.Unidad = vudm.Id  where p.IdResidente = @id",
    verPrescripcionesPorId: "SELECT P.*, v.NombreDroga, v.NombreComercial, vff.FormaFarmaceutica, vudm.Unidad FROM  Prescripciones P  inner join VADEMECUM V on p.IdMedicamento = v.id    INNER JOIN VADEMECUMMEDICACIONES VM ON V.id = VM.VademecumId        inner join VademecumFormaFarmaceutica vff on vff.id = vm.FormaFarmaceuticaId     inner join VademecumUnidadesDeMedida vudm on vudm.id = vm.UnidadMedidaId  where p.Id = @id",
    crearPrescripcion: "INSERT INTO PRESCRIPCIONES (IdResidente, IdMedicamento, Via, Desayuno, Almuerzo, Merienda, Cena, Observaciones, Estado,FechaDePrescripcion, Dosis, FechaDeInicio, FechaDeFin, Dias, TipoDeIndicacion, Unidad, EnPastillero, HorariosEspecificos, HorariosEspecificosEstado) VALUES (@IdResidente, @IdMedicamento, @Via, @Desayuno, @Almuerzo, @Merienda, @Cena, @Observaciones, @Estado, @FechaPrescripcion, @Dosis, @FechaDeInicio, @FechaDeFin, @Dias, @TipoDeIndicacion, @Unidad, @EnPastillero, @HorariosEspecificos, @HorariosEspecificosEstado);SELECT SCOPE_IDENTITY() as IdRespuesta ",
    
   
    //VADEMECUM
    verVademecumPorId: "SELECT v.NombreDroga, v.NombreComercial, vff.FormaFarmaceutica, vudm.Unidad FROM VADEMECUM V INNER JOIN VADEMECUMMEDICACIONES VM ON V.id = VM.VademecumId     inner join VademecumFormaFarmaceutica vff on vff.id = vm.FormaFarmaceuticaId inner join VademecumUnidadesDeMedida vudm on vudm.id = vm.UnidadMedidaId where v.Id = @id",
    verTodosLosVademecum:"SELECT * From Vademecum",    
    verTodosLosVademecumUFF: "SELECT v.id as VId , v.NombreDroga, v.NombreComercial, vff.id as VffId, vff.FormaFarmaceutica, vudm.id as VudId, vudm.Unidad FROM VADEMECUM V INNER JOIN VADEMECUMMEDICACIONES VM ON V.id = VM.VademecumId     inner join VademecumFormaFarmaceutica vff on vff.id = vm.FormaFarmaceuticaId inner join VademecumUnidadesDeMedida vudm on vudm.id = vm.UnidadMedidaId",
    verTodasLasVias:"SELECT * From PrescripcionesVia ORDER BY Via ASC",
    verTodasLasUnidades:"SELECT * From VademecumUnidadesDeMedida ORDER BY Unidad ASC" ,
    verUnidadPorIdDroga: "Select vm.VademecumId , vum.Id, vum.Unidad From VademecumMedicaciones vm inner join VademecumUnidadesDeMedida vum on vum.Id = vm.UnidadMedidaId  where VademecumId = @Id",

}