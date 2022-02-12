exports.getDataDelivery = (datos) => {
  const { planilla, fecha, estado, consignatario } = datos;

  // return `SELECT tbl_rp_tx_routes.planilla, tbl_rp_tx_routes.date_created, tbl_rp_tx_shipments.consignee, tbl_rp_tx_shipments.awb, tbl_rp_tx_shipments.sro, tbl_rp_tx_shipments.status, tbl_rp_tx_shipments.receiver_name, tbl_rp_tx_shipments.delivery FROM rp_track_and_trace_framework.tbl_rp_tx_routes join rp_track_and_trace_framework.tbl_rp_tx_shipments on tbl_rp_tx_routes.planilla = tbl_rp_tx_shipments.planilla where ${planilla !== null ? `tbl_rp_tx_routes.planilla = "${planilla}"` : ""}${fecha !== null ? `and tbl_rp_tx_routes.date_created="${fecha}" ` : ""}${consignatario !== null ? `and tbl_rp_tx_shipments.receiver_name="${consignatario}"`: ""}${estado !== null ? `and tbl_rp_tx_shipments.status="${estado}"` : ""}`;

  return `SELECT tbl_rp_tx_routes.planilla, tbl_rp_tx_routes.route_id, tbl_rp_tx_routes.driver_name, tbl_rp_tx_routes.plate_no, tbl_rp_tx_routes.number_awb, tbl_rp_tx_routes.signature_driver_path, tbl_rp_tx_routes.driver_signature_timestamp, tbl_rp_tx_routes.date_created, tbl_rp_tx_shipments.consignee, tbl_rp_tx_shipments.cust_id, tbl_rp_tx_shipments.sro, tbl_rp_tx_shipments.status, tbl_rp_tx_shipments.receiver_name, tbl_rp_tx_shipments.delivery, tbl_rp_tx_shipments.consignee_address, tbl_rp_tx_shipments.delivery, tbl_rp_tx_shipments.part_number_apple, tbl_rp_tx_shipments.sro, tbl_rp_tx_shipments.customer_signature_timestamp, tbl_rp_tx_shipments.signature_delivery_path, tbl_rp_tx_shipments.receiver_name, tbl_rp_tx_shipments.cc FROM rp_track_and_trace_framework.tbl_rp_tx_routes join rp_track_and_trace_framework.tbl_rp_tx_shipments on tbl_rp_tx_routes.planilla = tbl_rp_tx_shipments.planilla  Where tbl_rp_tx_shipments.primary_secondary = "Primary" and courier = "Ingram" ${
    planilla !== null ? `and tbl_rp_tx_routes.planilla = "${planilla}"` : ""
  }${fecha !== null ? `and tbl_rp_tx_shipments.date ="${fecha}" ` : ""}${
    consignatario !== null
      ? `and tbl_rp_tx_shipments.consignee like"${consignatario}"`
      : ""
  }${estado !== null ? `and tbl_rp_tx_shipments.status="${estado}"` : ""} `;

  // !original

  // return `SELECT tbl_rp_tx_routes.planilla, tbl_rp_tx_routes.date_created, tbl_rp_tx_shipments.consignee, tbl_rp_tx_shipments.awb, tbl_rp_tx_shipments.sro, tbl_rp_tx_shipments.status, tbl_rp_tx_shipments.receiver_name, tbl_rp_tx_shipments.delivery FROM rp_track_and_trace_framework.tbl_rp_tx_routes join rp_track_and_trace_framework.tbl_rp_tx_shipments on tbl_rp_tx_routes.planilla = tbl_rp_tx_shipments.planilla where ${
  //   planilla !== null ? `tbl_rp_tx_routes.planilla = "${planilla}"` : ""
  // }${fecha !== null ? `tbl_rp_tx_routes.date_created="${fecha}" ` : ""}${
  //   consignatario !== null
  //     ? `and tbl_rp_tx_shipments.receiver_name="${consignatario}"`
  //     : ""
  // }${estado !== null ? `and tbl_rp_tx_shipments.status="${estado}"` : ""}`;
};

// `
// SELECT tbl_rp_tx_routes.planilla, tbl_rp_tx_routes.date_created, tbl_rp_tx_shipments.consignee, tbl_rp_tx_shipments.cust_id, tbl_rp_tx_shipments.sro, tbl_rp_tx_shipments.status, tbl_rp_tx_shipments.receiver_name, tbl_rp_tx_shipments.delivery FROM rp_track_and_trace_framework.tbl_rp_tx_routes join rp_track_and_trace_framework.tbl_rp_tx_shipments on tbl_rp_tx_routes.planilla = tbl_rp_tx_shipments.planilla Where tbl_rp_tx_routes.planilla = "${planilla}" and tbl_rp_tx_routes.date_created="${fecha}" and tbl_rp_tx_shipments.receiver_name="${consignatario}" and tbl_rp_tx_shipments.status="${estado}"
// `;

// return `SELECT tbl_rp_tx_routes.planilla, tbl_rp_tx_routes.date_created, tbl_rp_tx_shipments.consignee, tbl_rp_tx_shipments.awb, tbl_rp_tx_shipments.sro, tbl_rp_tx_shipments.status, tbl_rp_tx_shipments.receiver_name, tbl_rp_tx_shipments.delivery FROM rp_track_and_trace_framework.tbl_rp_tx_routes join rp_track_and_trace_framework.tbl_rp_tx_shipments on tbl_rp_tx_routes.planilla = tbl_rp_tx_shipments.planilla where ${
//   planilla !== null ? `tbl_rp_tx_routes.planilla = "${planilla}"` : ""
// }${fecha !== null ? `and tbl_rp_tx_routes.date_created="${fecha}" ` : ""}${
//   consignatario !== null
//     ? `and tbl_rp_tx_shipments.receiver_name="${consignatario}"`
//     : ""
// }${estado !== null ? `and tbl_rp_tx_shipments.status="${estado}"` : ""}`;

// `SELECT tbl_rp_tx_routes.planilla, tbl_rp_tx_routes.route_id, tbl_rp_tx_routes.driver_name, tbl_rp_tx_routes.plate_no, tbl_rp_tx_routes.number_awb, tbl_rp_tx_routes.signature_driver_path, tbl_rp_tx_routes.driver_signature_timestamp, tbl_rp_tx_routes.date_created, tbl_rp_tx_shipments.consignee, tbl_rp_tx_shipments.cust_id, tbl_rp_tx_shipments.sro, tbl_rp_tx_shipments.status, tbl_rp_tx_shipments.receiver_name, tbl_rp_tx_shipments.delivery, tbl_rp_tx_shipments.consignee_address, tbl_rp_tx_shipments.delivery, tbl_rp_tx_shipments.part_number_apple, tbl_rp_tx_shipments.sro, tbl_rp_tx_shipments.customer_signature_timestamp, tbl_rp_tx_shipments.signature_delivery_path, tbl_rp_tx_shipments.receiver_name, tbl_rp_tx_shipments.cc
// FROM rp_track_and_trace_framework.tbl_rp_tx_routes join rp_track_and_trace_framework.tbl_rp_tx_shipments on tbl_rp_tx_routes.planilla = tbl_rp_tx_shipments.planilla
// Where ${planilla !== null ? `tbl_rp_tx_routes.planilla = "${planilla}"` : ""}${
//   fecha !== null ? `tbl_rp_tx_routes.date_created="${fecha}" ` : ""
// }${
//   consignatario !== null
//     ? `and tbl_rp_tx_shipments.receiver_name="${consignatario}"`
//     : ""
// }${
//   estado !== null ? `and tbl_rp_tx_shipments.status="${estado}"` : ""
// } and tbl_rp_tx_shipments.primary_secondary = 'Primary'`;
