import { z } from 'zod';

const ConsigneeSchema = z
  .object({
    nameTitle: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_CONSIGNEE_001' }),
      })
      .min(1),
    countryCode: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_CONSIGNEE_002' }),
      })
      .min(2)
      .max(2),
    cityName: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_CONSIGNEE_003' }),
      })
      .min(1),
    citySubdivisionName: z.union([
      z.string().max(120),
      z.null(),
      z.undefined(),
    ]),
    streetName: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_CONSIGNEE_004' }),
      })
      .min(1)
      .max(120),
    postalCode: z.union([z.string().max(10), z.null(), z.undefined()]),
    telephone: z.union([z.string(), z.null(), z.undefined()]),
    telefax: z.union([z.string(), z.null(), z.undefined()]),
  })
  .strict({ message: 'ADDITIONAL_PROPERTY_ERROR_CONSIGNEE' });

const CarrierSchema = z
  .object({
    id: z
      .string({ errorMap: () => ({ message: 'VALIDATION_ERROR_CARRIER_001' }) })
      .min(1),
    name: z
      .string({ errorMap: () => ({ message: 'VALIDATION_ERROR_CARRIER_002' }) })
      .min(1),
    branchId: z.union([
      z.string().min(1).max(8),
      z.string().max(0),
      z.null(),
      z.undefined(),
    ]),
  })
  .strict({ message: 'ADDITIONAL_PROPERTY_ERROR_CARRIER' });

const TransitDocumentSchema = z
  .object({
    documentType: z.enum(['T1']),
    vehicleId: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_TRANSIT_DOCUMENT_002' }),
      })
      .min(1),
    packageQuantity: z
      .number({
        errorMap: () => ({ message: 'VALIDATION_ERROR_TRANSIT_DOCUMENT_003' }),
      })
      .int()
      .min(1),
    invoices: z.array(z.object({})).min(1),
    tanker: z.union([z.boolean(), z.null(), z.undefined()]),
    countriesOfRoute: z.union([
      z.array(z.string().min(2).max(2)).min(2),
      z.array(z.string()).max(0),
      z.null(),
      z.undefined(),
    ]),
  })
  .strict({ message: 'ADDITIONAL_PROPERTY_ERROR_TRANSIT_DOCUMENT' });

const TransportAgencySchema = z
  .object({
    id: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_TRANSPORT_AGENCY_001' }),
      })
      .min(1),
    branchId: z.union([
      z.string().min(1).max(8),
      z.string().max(0),
      z.null(),
      z.undefined(),
    ]),
  })
  .strict({ message: 'ADDITIONAL_PROPERTY_ERROR_TRANSPORT_AGENCY' });

const TransportInfoSchema = z
  .object({
    transportersAgency: z.union([
      TransportAgencySchema.nullable(),
      z.null(),
      z.undefined(),
    ]),
    transitDocuments: z.array(TransitDocumentSchema).min(1),
  })
  .strict({ message: 'ADDITIONAL_PROPERTY_ERROR_TRANSPORT_INFO' });

const ProducerSchema = z
  .object({
    id: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_PRODUCER_001' }),
      })
      .min(1),
    name: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_PRODUCER_002' }),
      })
      .min(1),
  })
  .strict({ message: 'ADDITIONAL_PROPERTY_ERROR_PRODUCER' });

const SupplierSchema = z
  .object({
    id: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_SUPPLIER_001' }),
      })
      .min(1),
    name: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_SUPPLIER_002' }),
      })
      .min(1),
  })
  .strict({ message: 'ADDITIONAL_PROPERTY_ERROR_SUPPLIER' });

const ItemSchema = z
  .object({
    itemLineNo: z
      .number({ errorMap: () => ({ message: 'VALIDATION_ERROR_ITEM_001' }) })
      .int()
      .min(1),
    hsCode: z
      .string({ errorMap: () => ({ message: 'VALIDATION_ERROR_ITEM_005' }) })
      .length(12),
    originCountryCode: z
      .string({ errorMap: () => ({ message: 'VALIDATION_ERROR_ITEM_002' }) })
      .length(2),
    procedure: z
      .string({ errorMap: () => ({ message: 'VALIDATION_ERROR_ITEM_003' }) })
      .length(4),
    incoterms: z
      .string({ errorMap: () => ({ message: 'VALIDATION_ERROR_ITEM_004' }) })
      .length(3),
    invoiceAmount: z
      .number({ errorMap: () => ({ message: 'VALIDATION_ERROR_ITEM_006' }) })
      .positive(),
    invoiceAmountCurrency: z
      .string({ errorMap: () => ({ message: 'VALIDATION_ERROR_ITEM_007' }) })
      .length(3),
    fobAmount: z.union([
      z.number().positive().nullable(),
      z.null(),
      z.undefined(),
    ]),
    articleCode: z.union([z.string(), z.null(), z.undefined()]),
    itemDescription: z
      .string({ errorMap: () => ({ message: 'VALIDATION_ERROR_ITEM_008' }) })
      .min(1)
      .max(210),
    itemDescriptionEN: z.union([z.string(), z.null(), z.undefined()]),
    itemDescriptionDE: z.union([z.string(), z.null(), z.undefined()]),
    grossWeight: z
      .number({ errorMap: () => ({ message: 'VALIDATION_ERROR_ITEM_009' }) })
      .positive(),
    netWeight: z
      .number({ errorMap: () => ({ message: 'VALIDATION_ERROR_ITEM_010' }) })
      .positive(),
    packagingType: z
      .string({ errorMap: () => ({ message: 'VALIDATION_ERROR_ITEM_011' }) })
      .length(2),
    packageQuantity: z.union([
      z.number().int().positive().nullable(),
      z.null(),
      z.undefined(),
    ]),
    itemQuantity: z.union([
      z.number().positive().nullable(),
      z.null(),
      z.undefined(),
    ]),
    itemQuantityUnit: z.union([z.string(), z.null(), z.undefined()]),
    statisticalQuantityUnit: z.union([z.string(), z.null(), z.undefined()]),
    statisticalQuantity: z.union([
      z.number().nullable(),
      z.null(),
      z.undefined(),
    ]),
    registeredTradeMark: z.boolean({
      errorMap: () => ({
        message: 'VALIDATION_ERROR_ITEM_014',
      }),
    }),
    tradeMarkRegistrationNo: z.union([z.string(), z.null(), z.undefined()]),
    producer: z.union([ProducerSchema, z.null(), z.undefined()]),
    supplier: z.union([SupplierSchema, z.null(), z.undefined()]),
    processingOption: z.union([
      z.number().int().min(1).max(4),
      z.null(),
      z.undefined(),
    ]),
    processingDocumentNo: z.union([z.string(), z.null(), z.undefined()]),
    processingLineNo: z.union([z.string(), z.null(), z.undefined()]),
    processingDocumentYear: z.union([
      z.string().length(4),
      z.null(),
      z.undefined(),
    ]),
    previousDeclarationNo: z.union([z.string(), z.null(), z.undefined()]),
    previousDeclarationLineNo: z.union([
      z.number().int().positive().nullable(),
      z.null(),
      z.undefined(),
    ]),
    returnToOrigin: z.union([z.boolean(), z.null(), z.undefined()]),
    lineReferenceNo: z.union([
      z.number().int().min(1).max(99999),
      z.null(),
      z.undefined(),
    ]),
    invoiceReferenceNo: z.union([z.string().max(10), z.null(), z.undefined()]),
    producerOrSupplier: z.union([
      z.enum(['Producer', 'Supplier', '']),
      z.null(),
      z.undefined(),
    ]),
    itemRemarks: z.union([z.string(), z.null(), z.undefined()]),
    productDescription: z.union([z.string(), z.null(), z.undefined()]),
  })
  .strict({ message: 'ADDITIONAL_PROPERTY_ERROR_ITEM' });

const CommercialInvoiceSchema = z
  .object({
    id: z
      .string({
        errorMap: () => ({
          message: 'VALIDATION_ERROR_COMMERCIAL_INVOICE_001',
        }),
      })
      .min(1),
    issueDate: z
      .string({
        errorMap: () => ({
          message: 'VALIDATION_ERROR_COMMERCIAL_INVOICE_002',
        }),
      })
      .min(1),
  })
  .strict({ message: 'ADDITIONAL_PROPERTY_ERROR_COMMERCIAL_INVOICE' });

const InvoiceSchema = z
  .object({
    invoiceNo: z
      .string({ errorMap: () => ({ message: 'VALIDATION_ERROR_INVOICE_001' }) })
      .min(1),
    invoiceDate: z
      .string({ errorMap: () => ({ message: 'VALIDATION_ERROR_INVOICE_002' }) })
      .min(1)
      .regex(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/),
    invoiceAmount: z
      .number({ errorMap: () => ({ message: 'VALIDATION_ERROR_INVOICE_003' }) })
      .positive(),
    invoiceAmountCurrency: z
      .string({ errorMap: () => ({ message: 'VALIDATION_ERROR_INVOICE_004' }) })
      .min(3)
      .max(3),
    gtbReferenceNo: z.union([
      z.string().max(0),
      z.string().min(23).max(23),
      z.null(),
      z.undefined(),
    ]),
    gtbReferenceDate: z.union([
      z.string().max(0),
      z
        .string()
        .min(1)
        .regex(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/),
      z.null(),
      z.undefined(),
    ]),
    countryOfDestinationCode: z
      .string({ errorMap: () => ({ message: 'VALIDATION_ERROR_INVOICE_007' }) })
      .min(2)
      .max(2),
    transportMode: z.enum(['1', '2', '3', '4', '5', '6', '7']),
    packageQuantity: z
      .number({ errorMap: () => ({ message: 'VALIDATION_ERROR_INVOICE_009' }) })
      .int()
      .min(1),
    compensatoryDuty: z.union([
      z.number().min(1).optional(),
      z.null(),
      z.undefined(),
    ]),
    fobAmount: z
      .number({ errorMap: () => ({ message: 'VALIDATION_ERROR_INVOICE_010' }) })
      .positive(),
    paymentMeansCode: z.enum([
      '1',
      '2',
      '3',
      '4',
      '6',
      '7',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
    ]),
    invoiceReferenceNo: z.union([z.string().max(10), z.null(), z.undefined()]),
    commercialInvoices: z.union([
      z.array(CommercialInvoiceSchema),
      z.null(),
      z.undefined(),
    ]),
    items: z.array(ItemSchema).min(1),
  })
  .strict({ message: 'ADDITIONAL_PROPERTY_ERROR_INVOICE' });

const ImportersCustomsBrokerSchema = z
  .object({
    id: z
      .string({
        errorMap: () => ({
          message: 'VALIDATION_ERROR_IMPORTERS_CUSTOMS_BROKER_001',
        }),
      })
      .min(1),
    branchId: z.union([
      z.string().min(1).max(8),
      z.string().max(0),
      z.null(),
      z.undefined(),
    ]),
  })
  .strict({ message: 'ADDITIONAL_PROPERTY_ERROR_IMPORTERS_CUSTOMS_BROKER' });

const ImportersDeclarationInfoSchema = z
  .object({
    importersCustomsBroker: ImportersCustomsBrokerSchema,
    eoriNo: z.union([z.string(), z.null(), z.undefined()]),
    eoriDepartmentNo: z.union([z.string(), z.null(), z.undefined()]),
  })
  .strict({ message: 'ADDITIONAL_PROPERTY_ERROR_DECLARATION_INFO' });

const CertificateInvoiceSchema = z
  .object({
    invoiceNo: z
      .string({
        errorMap: () => ({
          message: 'VALIDATION_ERROR_CERTIFICATE_INVOICE_001',
        }),
      })
      .min(1),
    itemLineNos: z.array(z.number().int().min(1)).min(1),
  })
  .strict({ message: 'ADDITIONAL_PROPERTY_ERROR_CERTIFICATE_INVOICE' });

const CertificateDocumentSchema = z
  .object({
    documentType: z.enum(['ATR', 'EUR1', 'C/O', 'FORM-A']),
    documentNo: z.union([
      z.string().length(8),
      z.string().max(0),
      z.null(),
      z.undefined(),
    ]),
    packageInfo: z
      .string({
        errorMap: () => ({
          message: 'VALIDATION_ERROR_CERTIFICATE_DOCUMENT_003',
        }),
      })
      .min(1),
    vesselNameOption: z.union([z.boolean(), z.null(), z.undefined()]),
    remarks: z.union([z.string(), z.null(), z.undefined()]),
    invoices: z.array(CertificateInvoiceSchema).min(1),
  })
  .strict({ message: 'ADDITIONAL_PROPERTY_ERROR_CERTIFICATE_DOCUMENT' });

const CertificateInfoSchema = z
  .object({
    atrAuthorizedExporter: z.union([z.boolean(), z.null(), z.undefined()]),
    eur1InvoiceOption: z.union([z.boolean(), z.null(), z.undefined()]),
    formaInvoiceOption: z.union([z.boolean(), z.null(), z.undefined()]),
    certificateDocuments: z.array(CertificateDocumentSchema).min(1),
  })
  .strict({ message: 'ADDITIONAL_PROPERTY_ERROR_CERTIFICATE_INFO' });

const ConsignorSchema = z
  .object({
    id: z
      .string({
        errorMap: () => ({
          message: 'VALIDATION_ERROR_CONSIGNOR_001',
        }),
      })
      .min(1),
    branchId: z.union([
      z.string({ message: 'VALIDATION_ERROR_CONSIGNOR_002' }).min(1).max(8),
      z.string().max(0),
      z.null(),
      z.undefined(),
    ]),
  })
  .strict({ message: 'ADDITIONAL_PROPERTY_ERROR_CONSIGNOR' });

const DirectExportJobOrderSchema = z
  .object({
    consignee: ConsigneeSchema,
    consignor: ConsignorSchema,
    customsCode: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_JOB_ORDER_001' }),
      })
      .length(6),
    declarantTaxNo: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_JOB_ORDER_007' }),
      })
      .min(1),
    exitCustomsCode: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_JOB_ORDER_002' }),
      })
      .length(6),
    financialResponsibleTaxNo: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_JOB_ORDER_008' }),
      })
      .min(1),
    invoices: z.array(InvoiceSchema).min(1),

    bankCode: z.union([z.string().length(12), z.string().max(0)]).nullish(),
    carrier: CarrierSchema,
    certificateInfo: CertificateInfoSchema.nullish(),
    combineItems: z.boolean().nullish(),
    compensatoryDutyOption: z.boolean().nullish(),
    containerNos: z.array(z.string().length(11)).nullish(),
    countryOfDispatch: z
      .union([z.string().length(2), z.string().max(0)])
      .nullish(),
    customerReference1: z.string({ message: 'TYPE_ERROR_JOB_ORDER' }).nullish(),
    customerReference2: z.string({ message: 'TYPE_ERROR_JOB_ORDER' }).nullish(),
    customerReference3: z.string({ message: 'TYPE_ERROR_JOB_ORDER' }).nullish(),
    cutOffDate: z.string({ message: 'TYPE_ERROR_JOB_ORDER' }).nullish(),
    deliveryPlace: z.string().max(40).nullish(),
    importersDeclarationInfo: ImportersDeclarationInfoSchema.nullish(),
    itemLocation: z.string({ message: 'TYPE_ERROR_JOB_ORDER' }).nullish(),
    portCode: z.string({ message: 'TYPE_ERROR_JOB_ORDER' }).nullish(),
    remarks: z.string({ message: 'TYPE_ERROR_JOB_ORDER' }).max(250).nullish(),
    simplifiedProcedure: z
      .union([
        z.enum(['', '4', '8', '10', '11', '12', '16'], {
          message: 'VALIDATION_ERROR_JOB_ORDER_005',
        }),
        z.string().nullable(),
      ])
      .nullish(),
    transportInfo: TransportInfoSchema.nullish(),
    vehicleCountry: z
      .union([z.string().length(2), z.string().max(0)])
      .nullish(),
    vehicleId: z.string({ message: 'TYPE_ERROR_JOB_ORDER' }).nullish(),
  })
  .strict({ message: 'ADDITIONAL_PROPERTY_ERROR_JOB_ORDER' });

export { DirectExportJobOrderSchema };
