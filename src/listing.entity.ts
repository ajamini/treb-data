import { BeforeInsert, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, Table, Unique } from "typeorm";

@Entity('listing')
export class ListingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  ml_num: string;

  @Column()
  a_c: string;

  @Column()
  acres: string;

  @Column()
  ad_text: string;

  @Column()
  addr: string;

  @Column()
  amps: string;

  @Column()
  appts: string;

  @Column()
  apt_num: string;

  @Column()
  area_infl1_out: string;

  @Column()
  area_infl2_out: string;

  @Column()
  ass_year: string;

  @Column()
  bath_tot: string;

  @Column()
  bay_size1: string;

  @Column()
  bay_size2: string;

  @Column()
  board: string;

  @Column()
  bph_num: string;

  @Column()
  br: string;

  @Column()
  br_plus: string;

  @Column()
  bsmt1_out: string;

  @Column()
  bsmt2_out: string;

  @Column()
  bus_type: string;

  @Column()
  cable: string;

  @Column()
  cac: string;

  @Column()
  cac_inc: string;

  @Column({ type: "date" })
  cctd: Date;

  @Column({ type: "date" })
  cd: Date;

  @Column()
  ceil_ht: string;

  @Column()
  ceil_ht_in: string;

  @Column()
  chattels: string;

  @Column()
  city_water: string;

  @Column()
  class: string;

  @Column({ type: "date" })
  cldt: Date;

  @Column({ type: "date" })
  cndsold_xd: Date;

  @Column()
  co_lagt_ph: string;

  @Column()
  co_list: string;

  @Column()
  com_chgs: string;

  @Column()
  com_coopb: string;

  @Column()
  comel_inc: string;

  @Column()
  comments: string;

  @Column()
  comp_pts: string;

  @Column()
  cond: string;

  @Column()
  cond_txinc: string;

  @Column()
  condo_corp: string;

  @Column()
  condo_exp: string;

  @Column()
  constr1_out: string;

  @Column()
  constr2_out: string;

  @Column()
  coop_s2: string;

  @Column()
  corp_num: string;

  @Column()
  country: string;

  @Column()
  county: string;

  @Column()
  crane: string;

  @Column()
  cross_st: string;

  @Column()
  days_open: string;

  @Column()
  dba: string;

  @Column()
  den_fr: string;

  @Column()
  depth: string;

  @Column()
  disc_td: string;

  @Column()
  dom: string;

  @Column()
  dont_disc: string;

  @Column()
  drive: string;

  @Column({ type: "date" })
  dt_sus: Date;

  @Column({ type: "date" })
  dt_ter: Date;

  @Column()
  elec: string;

  @Column()
  elevator: string;

  @Column()
  employees: string;

  @Column()
  ens_lndry: string;

  @Column()
  esc_clause: string;

  @Column()
  esc_flag: string;

  @Column()
  exer_gym: string;

  @Column()
  exp_actest: string;

  @Column()
  extras: string;

  @Column()
  farm_agri: string;

  @Column()
  fin_stmnt: string;

  @Column()
  fpl_num: string;

  @Column()
  franchise: string;

  @Column()
  freestandg: string;

  @Column()
  front_ft: string;

  @Column()
  fuel: string;

  @Column()
  gar: string;

  @Column()
  gar_spaces: string;

  @Column()
  gar_type: string;

  @Column()
  gas: string;

  @Column()
  gross_inc: string;

  @Column()
  heat_exp: string;

  @Column()
  heat_inc: string;

  @Column()
  heating: string;

  @Column()
  holdover: string;

  @Column()
  hours_open: string;

  @Column()
  hydro_exp: string;

  @Column()
  hydro_inc: string;

  @Column()
  inc_list: string;

  @Column()
  inc_sale: string;

  @Column()
  ind_area: string;

  @Column()
  ind_areacd: string;

  @Column({ type: "date" })
  input_date: Date;

  @Column()
  insur: string;

  @Column()
  insur_bldg: string;

  @Column()
  internet: string;

  @Column()
  inventory: string;

  @Column()
  irreg: string;

  @Column()
  lagt_ph: string;

  @Column({ type: "date" })
  ld: Date;

  @Column()
  legal_desc: string;

  @Column()
  level1: string;

  @Column()
  level2: string;

  @Column()
  level3: string;

  @Column()
  level4: string;

  @Column()
  level5: string;

  @Column()
  level6: string;

  @Column()
  level7: string;

  @Column()
  level8: string;

  @Column()
  level9: string;

  @Column()
  list_agent: string;

  @Column()
  llbo: string;

  @Column()
  locker: string;

  @Column()
  locker_num: string;

  @Column()
  lot_code: string;

  @Column()
  lot_fr_inc: string;

  @Column()
  lot_u_prt: string;

  @Column()
  lotsz_code: string;

  @Column()
  lp_code: string;

  @Column()
  lp_dol: string;

  @Column()
  lsc: string;

  @Column()
  lse_terms: string;

  @Column({ type: "date" })
  lud: Date;

  @Column()
  maint: string;

  @Column()
  map_col: string;

  @Column()
  map_page: string;

  @Column()
  map_row: string;

  @Column()
  mgmt: string;

  @Column()
  minrenttrm: string;

  @Column()
  mort_amt: string;

  @Column()
  mort_comm: string;

  @Column()
  mort_freq: string;

  @Column()
  mort_inc: string;

  @Column()
  mort_ir: string;

  @Column()
  mort_lendr: string;

  @Column()
  mort_mdt: string;

  @Column()
  mort_pay: string;

  @Column()
  net_inc: string;

  @Column()
  num_kit: string;

  @Column()
  oa_area: string;

  @Column()
  occ: string;

  @Column()
  occupancy: string;

  @Column()
  oenc: string;

  @Column()
  oenc_freq: string;

  @Column()
  oenc_inc: string;

  @Column()
  oenc_ir: string;

  @Column()
  oenc_lendr: string;

  @Column()
  oenc_mdt: string;

  @Column()
  oenc_pay: string;

  @Column()
  oenc_type: string;

  @Column()
  off_areacd: string;

  @Column()
  oper_exp: string;

  @Column()
  orig_dol: string;

  @Column()
  orig_lp_cd: string;

  @Column()
  oth_struc1_out: string;

  @Column()
  oth_struc2_out: string;

  @Column()
  other: string;

  @Column()
  out_storg: string;

  @Column()
  outof_area: string;

  @Column()
  parcel_id: string;

  @Column()
  park_chgs: string;

  @Column()
  park_desig: string;

  @Column()
  park_fac: string;

  @Column()
  park_spc1: string;

  @Column()
  park_spc2: string;

  @Column()
  park_spcs: string;

  @Column()
  patio_ter: string;

  @Column({ type: "date" })
  pctd: Date;

  @Column()
  perc_bldg: string;

  @Column()
  perc_dif: string;

  @Column()
  perc_rent: string;

  @Column()
  pets: string;

  @Column()
  pix: string;

  @Column()
  pix_img: string;

  @Column()
  pix_ts: string;

  @Column()
  pool: string;

  @Column()
  ppcode: string;

  @Column()
  pr_lp_dol: string;

  @Column()
  pr_lsc: string;

  @Column()
  prkg_inc: string;

  @Column()
  prop_feat1_out: string;

  @Column()
  prop_feat2_out: string;

  @Column()
  prop_type: string;

  @Column()
  rail: string;

  @Column()
  rec_room: string;

  @Column({ type: "date" })
  redt: Date;

  @Column()
  retail_a: string;

  @Column()
  retail_ac: string;

  @Column()
  rltr: string;

  @Column()
  rm1_dc1_out: string;

  @Column()
  rm1_dc2_out: string;

  @Column()
  rm1_dc3_out: string;

  @Column()
  rm1_len: string;

  @Column()
  rm1_out: string;

  @Column()
  rm1_wth: string;

  @Column()
  rm2_dc1_out: string;

  @Column()
  rm2_dc2_out: string;

  @Column()
  rm2_dc3_out: string;

  @Column()
  rm2_len: string;

  @Column()
  rm2_out: string;

  @Column()
  rm2_wth: string;

  @Column()
  rm3_dc1_out: string;

  @Column()
  rm3_dc2_out: string;

  @Column()
  rm3_dc3_out: string;

  @Column()
  rm3_len: string;

  @Column()
  rm3_out: string;

  @Column()
  rm3_wth: string;

  @Column()
  rm4_dc1_out: string;

  @Column()
  rm4_dc2_out: string;

  @Column()
  rm4_dc3_out: string;

  @Column()
  rm4_len: string;

  @Column()
  rm4_out: string;

  @Column()
  rm4_wth: string;

  @Column()
  rm5_dc1_out: string;

  @Column()
  rm5_dc2_out: string;

  @Column()
  rm5_dc3_out: string;

  @Column()
  rm5_len: string;

  @Column()
  rm5_out: string;

  @Column()
  rm5_wth: string;

  @Column()
  rm6_dc1_out: string;

  @Column()
  rm6_dc2_out: string;

  @Column()
  rm6_dc3_out: string;

  @Column()
  rm6_len: string;

  @Column()
  rm6_out: string;

  @Column()
  rm6_wth: string;

  @Column()
  rm7_dc1_out: string;

  @Column()
  rm7_dc2_out: string;

  @Column()
  rm7_dc3_out: string;

  @Column()
  rm7_len: string;

  @Column()
  rm7_out: string;

  @Column()
  rm7_wth: string;

  @Column()
  rm8_dc1_out: string;

  @Column()
  rm8_dc2_out: string;

  @Column()
  rm8_dc3_out: string;

  @Column()
  rm8_len: string;

  @Column()
  rm8_out: string;

  @Column()
  rm8_wth: string;

  @Column()
  rm9_dc1_out: string;

  @Column()
  rm9_dc2_out: string;

  @Column()
  rm9_dc3_out: string;

  @Column()
  rm9_len: string;

  @Column()
  rm9_out: string;

  @Column()
  rm9_wth: string;

  @Column()
  rms: string;

  @Column()
  rooms_plus: string;

  @Column()
  rr: string;

  @Column({ type: "date" })
  rr_edt: Date;

  @Column()
  s_areacd: string;

  @Column()
  s_r: string;

  @Column()
  sauna: string;

  @Column({ type: "date" })
  scdt: Date;

  @Column()
  seats: string;

  @Column()
  sec: string;

  @Column()
  secgrd_sys: string;

  @Column()
  sell_agt: string;

  @Column()
  sewer: string;

  @Column()
  share_perc: string;

  @Column()
  shpdrsdlnu: string;

  @Column()
  shpdrsdmnu: string;

  @Column()
  shpdrsglnu: string;

  @Column()
  shpdrstlnu: string;

  @Column()
  soil_test: string;

  @Column()
  sold_area: string;

  @Column()
  sp_code: string;

  @Column()
  sp_dol: string;

  @Column()
  spec_des: string;

  @Column()
  sprinklers: string;

  @Column()
  sqft: string;

  @Column()
  sqs_rac_ct: string;

  @Column()
  srchst_num: string;

  @Column()
  srltr: string;

  @Column()
  st: string;

  @Column()
  st_dir: string;

  @Column()
  st_num: string;

  @Column()
  st_sfx: string;

  @Column()
  status: string;

  @Column()
  stories: string;

  @Column()
  style: string;

  @Column()
  survey: string;

  @Column({ type: "date" })
  susdt: Date;

  @Column()
  taxes: string;

  @Column()
  taxes_exp: string;

  @Column({ type: "date" })
  td: Date;

  @Column()
  tennis_ct: string;

  @Column()
  terms: string;

  @Column()
  timestamp: string;

  @Column()
  tot_area: string;

  @Column()
  tot_areacd: string;

  @Column()
  tot_exp: string;

  @Column()
  tour_flag: string;

  @Column()
  tour_url: string;

  @Column()
  town: string;

  @Column()
  township: string;

  @Column()
  tv: string;

  @Column()
  type_own1_out: string;

  @Column()
  type_own2_out: string;

  @Column()
  type_taxes: string;

  @Column({ type: 'date' })
  uctd: Date;

  @Column()
  uffi: string;

  @Column({ type: 'date' })
  unavail_dt: Date;

  @Column()
  unit_num: string;

  @Column()
  util_cable: string;

  @Column()
  util_sewr: string;

  @Column()
  util_tel: string;

  @Column()
  utilities: string;

  @Column()
  vac_perc: string;

  @Column()
  vend_pis: string;

  @Column()
  volts: string;

  @Column()
  vtour_upby: string;

  @Column({ type: "date" })
  vtour_updt: Date;

  @Column()
  water: string;

  @Column()
  water_exp: string;

  @Column()
  water_inc: string;

  @Column()
  wcloset_p1: string;

  @Column()
  wcloset_p2: string;

  @Column()
  wcloset_p3: string;

  @Column()
  wcloset_p4: string;

  @Column()
  wcloset_t1: string;

  @Column()
  wcloset_t2: string;

  @Column()
  wcloset_t3: string;

  @Column()
  wcloset_t4: string;

  @Column({ type: "date" })
  wrtd: Date;

  @Column()
  wtr_suptyp: string;

  @Column({ type: "date" })
  xd: Date;

  @Column({ type: "date" })
  xdtd: Date;

  @Column()
  yr: string;

  @Column()
  yr_built: string;

  @Column()
  yr_exp: string;

  @Column()
  zip: string;

  @Column()
  zn: string;

  @Column()
  zoning: string;

  @Column()
  agent_id: string;

  @Column()
  code_treb: string;

  @Column()
  co_lagt_id: string;

  @Column()
  disp_addr: string;

  @Column()
  mmap_col: string;

  @Column()
  mmap_page: string;

  @Column()
  mmap_row: string;

  @Column()
  prop_mgmt: string;

  @Column()
  perm_adv: string;

  @Column()
  contac_exp: string;

  @Column()
  all_inc: string;

  @Column()
  furnished: string;

  @Column()
  pvt_ent: string;

  @Column()
  laundry: string;

  @Column()
  lease_term: string;

  @Column()
  pay_freq: string;

  @Column()
  pay_meth: string;

  @Column()
  app_req: string;

  @Column()
  sec_dep: string;

  @Column()
  credit_chk: string;

  @Column()
  emply_lett: string;

  @Column()
  lease: string;

  @Column()
  ref_req: string;

  @Column()
  opt_to_buy: string;

  @Column()
  trlr_pk_spt: string;

  @Column()
  yr1_lsd_price: string;

  @Column()
  yr2_lsd_price: string;

  @Column()
  yr3_lsd_price: string;

  @Column()
  yr4_lsd_price: string;

  @Column()
  yr5_lsd_price: string;

  @Column()
  addl_mo_fee: string;

  @Column()
  central_vac: string;

  @Column()
  com_cn_fee: string;

  @Column()
  bay_size2_in: string;

  @Column()
  bay_size1_in: string;

  @Column()
  shpdrsdmhtft: string;

  @Column()
  shpdrsdmhtin: string;

  @Column()
  shpdrsdmwdft: string;

  @Column()
  shpdrsdmwdin: string;

  @Column()
  shpdrsdlhtft: string;

  @Column()
  shpdrsdlhtin: string;

  @Column()
  shpdrsdlwdft: string;

  @Column()
  shpdrsdlwdin: string;

  @Column()
  shpdrsglhtft: string;

  @Column()
  shpdrsglhtin: string;

  @Column()
  shpdrsglwdft: string;

  @Column()
  shpdrsglwdin: string;

  @Column()
  shpdrstlhtft: string;

  @Column()
  shpdrstlhtin: string;

  @Column()
  shpdrstlwdft: string;

  @Column()
  shpdrstlwdin: string;

  @Column()
  kit_plus: string;

  @Column()
  laundry_lev: string;

  @Column()
  park_lgl_desc1: string;

  @Column()
  park_lgl_desc2: string;

  @Column()
  parking_spots: string;

  @Column()
  park_desig_2: string;

  @Column()
  retirement: string;

  @Column()
  rm10_out: string;

  @Column()
  rm10_dc1_out: string;

  @Column()
  rm10_dc2_out: string;

  @Column()
  rm10_dc3_out: string;

  @Column()
  rm10_len: string;

  @Column()
  rm10_wth: string;

  @Column()
  rm11_out: string;

  @Column()
  rm11_dc1_out: string;

  @Column()
  rm11_dc2_out: string;

  @Column()
  rm11_dc3_out: string;

  @Column()
  rm11_len: string;

  @Column()
  rm11_wth: string;

  @Column()
  rm12_out: string;

  @Column()
  rm12_dc1_out: string;

  @Column()
  rm12_dc2_out: string;

  @Column()
  rm12_dc3_out: string;

  @Column()
  rm12_len: string;

  @Column()
  rm12_wth: string;

  @Column()
  waterfront: string;

  @Column()
  prop_feat3_out: string;

  @Column()
  prop_feat4_out: string;

  @Column()
  prop_feat5_out: string;

  @Column()
  prop_feat6_out: string;

  @Column()
  wcloset_t5: string;

  @Column()
  wcloset_p5: string;

  @Column()
  wcloset_t1lvl: string;

  @Column()
  wcloset_t2lvl: string;

  @Column()
  wcloset_t3lvl: string;

  @Column()
  wcloset_t4lvl: string;

  @Column()
  wcloset_t5lvl: string;

  @Column()
  bldg_amen1_out: string;

  @Column()
  bldg_amen2_out: string;

  @Column()
  bldg_amen3_out: string;

  @Column()
  bldg_amen4_out: string;

  @Column()
  bldg_amen5_out: string;

  @Column()
  bldg_amen6_out: string;

  @Column()
  spec_des1_out: string;

  @Column()
  spec_des2_out: string;

  @Column()
  spec_des3_out: string;

  @Column()
  spec_des4_out: string;

  @Column()
  spec_des5_out: string;

  @Column()
  spec_des6_out: string;

  @Column()
  level10: string;

  @Column()
  level11: string;

  @Column()
  level12: string;

  @Column()
  oh_date1: string;

  @Column()
  oh_from1: string;

  @Column()
  oh_to1: string;

  @Column()
  oh_date2: string;

  @Column()
  oh_from2: string;

  @Column()
  oh_to2: string;

  @Column()
  oh_date3: string;

  @Column()
  oh_from3: string;

  @Column()
  oh_to3: string;

  @Column()
  oh_dt_stamp: string;

  @Column()
  area_code: string;

  @Column()
  municipality_code: string;

  @Column()
  community_code: string;

  @Column()
  area: string;

  @Column()
  municipality: string;

  @Column()
  community: string;

  @Column()
  handi_equipped: string;

  @Column()
  sqft_source: string;

  @Column()
  energy_cert: string;

  @Column()
  green_pis: string;

  @Column()
  cert_lvl: string;

  @Column()
  bldg_name: string;

  @Column()
  status_cert: string;

  @Column()
  alt_feature_sheet: string;

  @Column()
  sound_bite_url: string;

  @Column()
  sales_brochure_url: string;

  @Column()
  addl_pix_url: string;

  @Column()
  map_loc_url: string;

  @Column({ type: "date" })
  lcdt: Date;

  @Column()
  municipality_district: string;

  @Column()
  water_body: string;

  @Column()
  water_type: string;

  @Column()
  water_front: string;

  @Column()
  water_feat1_out: string;

  @Column()
  water_feat2_out: string;

  @Column()
  water_feat3_out: string;

  @Column()
  water_feat4_out: string;

  @Column()
  water_feat5_out: string;

  @Column()
  access_prop1_out: string;

  @Column()
  access_prop2_out: string;

  @Column()
  shoreline1_out: string;

  @Column()
  shoreline2_out: string;

  @Column()
  shore_allow: string;

  @Column()
  shoreline_exp: string;

  @Column()
  alt_power1_out: string;

  @Column()
  alt_power2_out: string;

  @Column()
  easement_rest1_out: string;

  @Column()
  easement_rest2_out: string;

  @Column()
  easement_rest3_out: string;

  @Column()
  easement_rest4_out: string;

  @Column()
  rural_svc1_out: string;

  @Column()
  rural_svc2_out: string;

  @Column()
  rural_svc3_out: string;

  @Column()
  rural_svc4_out: string;

  @Column()
  rural_svc5_out: string;

  @Column()
  water_acc_bldg1_out: string;

  @Column()
  water_acc_bldg2_out: string;

  @Column()
  water_del_feat1_out: string;

  @Column()
  water_del_feat2_out: string;

  @Column()
  sewage1_out: string;

  @Column()
  sewage2_out: string;

  @Column()
  potl: string;

  @Column()
  ddf_idx: string;

  @Column()
  tot_park_spcs: string;

  @Column()
  link_yn: string;

  @Column()
  link_comment: string;

  @Column()
  poss_date: string;

  @Column({ type: "date" })
  oh_date4: Date;

  @Column()
  oh_from4: string;

  @Column()
  oh_to4: string;

  @Column({ type: "date" })
  oh_date5: Date;

  @Column()
  oh_from5: string;

  @Column()
  oh_to5: string;

  @Column({ type: "date" })
  oh_date6: Date;

  @Column()
  oh_from6: string;

  @Column()
  oh_to6: string;

  @Column()
  oh_link1: string;

  @Column()
  oh_type1: string;

  @Column()
  oh_link2: string;

  @Column()
  oh_type2: string;

  @Column()
  oh_link3: string;

  @Column()
  oh_type3: string;

  @Column()
  oh_link4: string;

  @Column()
  oh_type4: string;

  @Column()
  oh_link5: string;

  @Column()
  oh_type5: string;

  @Column()
  oh_link6: string;

  @Column()
  oh_type6: string;

  @Column()
  portion_property_lease1_out: string;

  @Column()
  portion_property_lease2_out: string;

  @Column()
  portion_property_lease3_out: string;

  @Column()
  portion_property_lease4_out: string;

  @Column()
  portion_property_lease_srch: string;

  @Column()
  portion_lease_comments: string;

  @Column()
  assignment: string;

  @Column()
  fractional_ownership: string;
}
