interface Employee {
  _id: string;
  NAME_FIRST: string;
  NAME_MIDDLE: string;
  NAME_LAST: string;
  NAME_INITIALS: string;
  SEX: string;
  LANGUAGE: string;
  PHONENUMBER: number;
  EMAILADDRESS: string;
  LOGINNAME: string;
  ADDRESS: Address;
  VALIDITY_STARTDATE: string;
  VALIDITY_ENDDATE: string;
}

interface Address {
  _id: string;
  STREET: string;
  CITY: string;
  STATE: string;
  ZIPCODE: string;
  COUNTRY: string;
}

interface Product {
  _id: string;
  TYPECODE: string;
  PRODCATEGORYID: string;
  CREATEDBY: string;
  CreatedAt: string;
  UpdatedAt: string;
  CHANGEDBY: string;
  CHANGEDAT: string;
  SUPPLIER_PARTNERID: string;
  TAXTARIFFCODE: string;
  QUANTITYUNIT: string;
  WEIGHTMEASURE: string;
  WEIGHTUNIT: string;
  CURRENCY: string;
  PRICE: string;
  WIDTH: string;
  DEPTH: string;
  HEIGHT: string;
  DIMENSIONUNIT: string;
  PRODUCTPICURL: string;
}

interface ProductCategory {
  _id: string;
  PRODCATEGORYCODE: string;
  DESCRIPTION: string;
  CREATEDBY: string;
  CreatedAt: string;
  UpdatedAt: string;
}
