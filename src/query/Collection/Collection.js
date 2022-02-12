exports.getDataCollection = (datos) => {
  const { planilla, fecha, puntoRecoleccion, sro, parteNo } = datos;

  console.log(fecha);
  console.log(planilla);
  console.log(puntoRecoleccion);
  console.log(sro);
  console.log(parteNo);

  //   console.log(
  // `SELECT tbl_rp_tx_collections.planilla, tbl_rp_tx_collections.driver,  tbl_rp_tx_collections.authorizer_name, tbl_rp_tx_collection_details.status, tbl_rp_tx_collection_details.company_name, tbl_rp_tx_collection_details.client_name, tbl_rp_tx_collection_details.created_date, tbl_rp_tx_collections.authorizer_id, tbl_rp_tx_collections.authorizer_signature_path, tbl_rp_tx_collections.authorizer_signature_timestamp, tbl_rp_tx_collection_details.collection_no, tbl_rp_tx_collection_details.quantity, tbl_rp_tx_collection_details.part_no, tbl_rp_tx_collection_details.rma, tbl_rp_tx_collection_details.sro, tbl_rp_tx_collection_details.client_id, tbl_rp_tx_collection_details.client_signature_timestamp, tbl_rp_tx_collection_details.serial, tbl_rp_tx_collection_details.client_signature_path, tbl_rp_tx_collection_details.primary_secondary
  // FROM rp_track_and_trace_framework.tbl_rp_tx_collection_details join rp_track_and_trace_framework.tbl_rp_tx_collections ON tbl_rp_tx_collection_details.collection_no = tbl_rp_tx_collections.collection_no Where tbl_rp_tx_collection_details.collection_no is not null ${ planilla !== null? `and tbl_rp_tx_collections.planilla = "${planilla}" `: ""} ${fecha !== null ? `and tbl_rp_tx_collections.created_date = "${fecha}"` : ""} ${puntoRecoleccion !== null? `and tbl_rp_tx_collection_details.company_name like "${puntoRecoleccion}"`: ""} ${sro !== null ? `and tbl_rp_tx_collection_details.sro = "${sro}"`: ""} ${parteNo !== null? `and tbl_rp_tx_collection_details.part_no = "${parteNo}"`: ""}`

  //   )

  return `SELECT tbl_rp_tx_collections.planilla, tbl_rp_tx_collections.driver,  tbl_rp_tx_collections.authorizer_name,tbl_rp_tx_collection_details.collection_detail_no,tbl_rp_tx_collection_details.status, tbl_rp_tx_collection_details.company_name, tbl_rp_tx_collection_details.client_name, tbl_rp_tx_collection_details.created_date, tbl_rp_tx_collections.authorizer_id, tbl_rp_tx_collections.authorizer_signature_path, tbl_rp_tx_collections.authorizer_signature_timestamp, tbl_rp_tx_collection_details.collection_no, tbl_rp_tx_collection_details.quantity, tbl_rp_tx_collection_details.part_no, tbl_rp_tx_collection_details.rma, tbl_rp_tx_collection_details.sro, tbl_rp_tx_collection_details.client_id, tbl_rp_tx_collection_details.client_signature_timestamp, tbl_rp_tx_collection_details.serial, tbl_rp_tx_collection_details.client_signature_path, tbl_rp_tx_collection_details.primary_secondary
FROM rp_track_and_trace_framework.tbl_rp_tx_collection_details join rp_track_and_trace_framework.tbl_rp_tx_collections ON tbl_rp_tx_collection_details.collection_no = tbl_rp_tx_collections.collection_no Where tbl_rp_tx_collection_details.collection_no is not null ${
    planilla !== null
      ? `and tbl_rp_tx_collections.planilla = "${planilla}" `
      : ""
  } ${
    fecha !== null
      ? `and  tbl_rp_tx_collections.created_date LIKE '%${fecha}%'`
      : ""
  } ${
    puntoRecoleccion !== null
      ? `and tbl_rp_tx_collection_details.company_name like "${puntoRecoleccion}"`
      : ""
  } ${sro !== null ? `and tbl_rp_tx_collection_details.sro = "${sro}"` : ""} ${
    parteNo !== null
      ? `and tbl_rp_tx_collection_details.part_no = "${parteNo}"`
      : ""
  }`;
};

// #	Ruta	No DE PLANILLA	PLACA	Centro Logistico	NOMBRE DEL TRANSPORTADOR	C.C.
// 1	Centro	123456	aaa123	Ingram	Transportador1	123456

// #	Ruta	No DE PLANILLA	PLACA	Centro Logistico	NOMBRE DEL TRANSPORTADOR	C.C.
// 1	Centro	123456	aaa123	Ingram	Transportador1	123456

// #	Delivery	Factura	Destinatario	Direccion	Cod Shipto	SRO	Part Number Apple	Material SAP	Value	Fecha Doc	Fecha Liberacion
// 2	000000	9999999	iProcess	Cra 62 103-17	1234567	12134567	661-8153	0	0	1/6/2020	1/6/2020
// 2	000001	1001009230	juan	2345	12345	23456	21345	23456	2.345	1/6/2020	1/6/2020
//
//
//
//
//


// PLANILLA DE TRANSPORTES											
// #	Ruta	No DE PLANILLA	PLACA	Centro Logistico	NOMBRE DEL TRANSPORTADOR	C.C.					
// 1	Centro	123456	aaa123	Ingram	Transportador1	123456					
											// 
// #	Delivery	Factura	Destinatario	Direccion	Cod Shipto	SRO	Part Number Apple	Material SAP	Value	Fecha Doc	Fecha Liberacion
// 2	000000	9999999	iProcess	Cra 62 103-17	1234567	12134567	661-8153	0	0	1/6/2020	1/6/2020
// 2	000001	1001009230	juan	2345	12345	23456	21345	23456	2,345	1/6/2020	1/6/2020

