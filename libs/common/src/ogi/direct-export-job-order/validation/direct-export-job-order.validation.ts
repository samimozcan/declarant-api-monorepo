import { z } from 'zod';

const ConsigneeSchema = z
  .object({
    nameTitle: z.string().min(1),
    countryCode: z.string().min(2).max(2),
    cityName: z.string().min(1),
    citySubdivisionName: z.union([
      z.string().max(120),
      z.null(),
      z.undefined(),
    ]),
    streetName: z.string().min(1).max(120),
    postalCode: z.union([z.string().max(10), z.null(), z.undefined()]),
    telephone: z.union([z.string(), z.null(), z.undefined()]),
    telefax: z.union([z.string(), z.null(), z.undefined()]),
  })
  .strict()
  .refine(() => true, {
    message: 'ADDITIONAL_PROPERTY_ERROR_CONSIGNEE',
    params: {
      properties: {
        nameTitle: 'VALIDATION_ERROR_CONSIGNEE_001',
        countryCode: 'VALIDATION_ERROR_CONSIGNEE_002',
        cityName: 'VALIDATION_ERROR_CONSIGNEE_003',
        streetName: 'VALIDATION_ERROR_CONSIGNEE_004',
        postalCode: 'VALIDATION_ERROR_CONSIGNEE_007',
        citySubdivisionName: 'VALIDATION_ERROR_CONSIGNEE_008',
      },
      required: 'MISSING_PROPERTY_ERROR_CONSIGNEE',
    },
  });

const CarrierSchema = z
  .object({
    id: z.string().min(1),
    name: z.string().min(1),
    branchId: z.union([
      z.string().min(1).max(8),
      z.string().max(0),
      z.null(),
      z.undefined(),
    ]),
  })
  .strict()
  .refine(() => true, {
    message: 'ADDITIONAL_PROPERTY_ERROR_CARRIER',
    params: {
      properties: {
        id: 'VALIDATION_ERROR_CARRIER_001',
        name: 'VALIDATION_ERROR_CARRIER_002',
        branchId: 'VALIDATION_ERROR_CARRIER_003',
      },
      required: 'MISSING_PROPERTY_ERROR_CARRIER',
    },
  });

const TransitDocumentSchema = z
  .object({
    documentType: z.enum(['T1']),
    vehicleId: z.string().min(1),
    packageQuantity: z.number().int().min(1),
    invoices: z.array(z.object({})).min(1),
    tanker: z.union([z.boolean(), z.null(), z.undefined()]),
    countriesOfRoute: z.union([
      z.array(z.string().min(2).max(2)).min(2),
      z.array(z.string()).max(0),
      z.null(),
      z.undefined(),
    ]),
  })
  .strict()
  .refine(() => true, {
    message: 'ADDITIONAL_PROPERTY_ERROR_TRANSIT_DOCUMENT',
    params: {
      properties: {
        documentType: 'VALIDATION_ERROR_TRANSIT_DOCUMENT_001',
        vehicleId: 'VALIDATION_ERROR_TRANSIT_DOCUMENT_002',
        packageQuantity: 'VALIDATION_ERROR_TRANSIT_DOCUMENT_003',
        invoices: 'VALIDATION_ERROR_TRANSIT_DOCUMENT_004',
        tanker: 'VALIDATION_ERROR_TRANSIT_DOCUMENT_005',
        countriesOfRoute: 'VALIDATION_ERROR_TRANSIT_DOCUMENT_006',
      },
      required: 'MISSING_PROPERTY_ERROR_TRANSIT_DOCUMENT',
    },
  });

const TransportAgencySchema = z
  .object({
    id: z.string().min(1),
    branchId: z.union([
      z.string().min(1).max(8),
      z.string().max(0),
      z.null(),
      z.undefined(),
    ]),
  })
  .strict()
  .refine(() => true, {
    message: 'ADDITIONAL_PROPERTY_ERROR_TRANSPORT_AGENCY',
    params: {
      properties: {
        id: 'VALIDATION_ERROR_TRANSPORT_AGENCY_001',
        branchId: 'VALIDATION_ERROR_TRANSPORT_AGENCY_002',
      },
      required: 'MISSING_PROPERTY_ERROR_TRANSPORT_AGENCY',
    },
  });

const TransportInfoSchema = z
  .object({
    transportersAgency: z.union([
      TransportAgencySchema.nullable(),
      z.null(),
      z.undefined(),
    ]),
    transitDocuments: z.array(TransitDocumentSchema).min(1),
  })
  .strict()
  .refine(() => true, {
    message: 'ADDITIONAL_PROPERTY_ERROR_TRANSPORT_INFO',
    params: {
      properties: {
        transportersAgency: 'VALIDATION_ERROR_TRANSPORT_INFO_001',
        transitDocuments: 'VALIDATION_ERROR_TRANSPORT_INFO_002',
      },
      required: 'MISSING_PROPERTY_ERROR_TRANSPORT_INFO',
    },
  });

const ProducerSchema = z
  .object({
    id: z.string().min(1),
    name: z.string().min(1),
  })
  .strict()
  .refine(() => true, {
    message: 'ADDITIONAL_PROPERTY_ERROR_PRODUCER',
    params: {
      properties: {
        id: 'VALIDATION_ERROR_PRODUCER_001',
        name: 'VALIDATION_ERROR_PRODUCER_002',
      },
      required: 'MISSING_PROPERTY_ERROR_PRODUCER',
    },
  });

const SupplierSchema = z
  .object({
    id: z.string().min(1),
    name: z.string().min(1),
  })
  .strict()
  .refine(() => true, {
    message: 'ADDITIONAL_PROPERTY_ERROR_SUPPLIER',
    params: {
      properties: {
        id: 'VALIDATION_ERROR_SUPPLIER_001',
        name: 'VALIDATION_ERROR_SUPPLIER_002',
      },
      required: 'MISSING_PROPERTY_ERROR_SUPPLIER',
    },
  });

const ItemSchema = z
  .object({
    itemLineNo: z.number().int().min(1),
    hsCode: z.string().length(12),
    originCountryCode: z.string().length(2),
    procedure: z.string().length(4),
    incoterms: z.string().length(3),
    invoiceAmount: z.number().positive(),
    invoiceAmountCurrency: z.string().length(3),
    fobAmount: z.union([
      z.number().positive().nullable(),
      z.null(),
      z.undefined(),
    ]),
    articleCode: z.union([z.string(), z.null(), z.undefined()]),
    itemDescription: z.string().min(1).max(210),
    itemDescriptionEN: z.union([z.string(), z.null(), z.undefined()]),
    itemDescriptionDE: z.union([z.string(), z.null(), z.undefined()]),
    grossWeight: z.number().positive(),
    netWeight: z.number().positive(),
    packagingType: z.string().length(2),
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
    registeredTradeMark: z.boolean(),
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
  .strict()
  .refine(() => true, {
    message: 'ADDITIONAL_PROPERTY_ERROR_ITEM',
    params: {
      properties: {
        itemLineNo: 'VALIDATION_ERROR_ITEM_001',
        originCountryCode: 'VALIDATION_ERROR_ITEM_002',
        procedure: 'VALIDATION_ERROR_ITEM_003',
        incoterms: 'VALIDATION_ERROR_ITEM_004',
        hsCode: 'VALIDATION_ERROR_ITEM_005',
        invoiceAmount: 'VALIDATION_ERROR_ITEM_006',
        invoiceAmountCurrency: 'VALIDATION_ERROR_ITEM_007',
        itemDescription: 'VALIDATION_ERROR_ITEM_008',
        grossWeight: 'VALIDATION_ERROR_ITEM_009',
        netWeight: 'VALIDATION_ERROR_ITEM_010',
        packagingType: 'VALIDATION_ERROR_ITEM_011',
        registeredTradeMark: 'VALIDATION_ERROR_ITEM_014',
        processingOption: 'VALIDATION_ERROR_ITEM_015',
        lineReferenceNo: 'VALIDATION_ERROR_ITEM_031',
        invoiceReferenceNo: 'VALIDATION_ERROR_ITEM_032',
        producerOrSupplier: 'VALIDATION_ERROR_ITEM_033',
        processingDocumentYear: 'VALIDATION_ERROR_ITEM_034',
      },
      required: 'MISSING_PROPERTY_ERROR_ITEM',
    },
  });

const CommercialInvoiceSchema = z
  .object({
    id: z.string().min(1),
    issueDate: z.string().min(1),
  })
  .strict()
  .refine(() => true, {
    message: 'ADDITIONAL_PROPERTY_ERROR_COMMERCIAL_INVOICE',
    params: {
      properties: {
        id: 'VALIDATION_ERROR_COMMERCIAL_INVOICE_001',
        issueDate: 'VALIDATION_ERROR_COMMERCIAL_INVOICE_002',
      },
      required: 'MISSING_PROPERTY_ERROR_COMMERCIAL_INVOICE',
    },
  });

const InvoiceSchema = z
  .object({
    invoiceNo: z.string().min(1),
    invoiceDate: z
      .string()
      .min(1)
      .regex(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/),
    invoiceAmount: z.number().positive(),
    invoiceAmountCurrency: z.string().min(3).max(3),
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
    countryOfDestinationCode: z.string().min(2).max(2),
    transportMode: z.enum(['1', '2', '3', '4', '5', '6', '7']),
    packageQuantity: z.number().int().min(1),
    compensatoryDuty: z.union([
      z.number().min(1).optional(),
      z.null(),
      z.undefined(),
    ]),
    fobAmount: z.number().positive(),
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
  .strict()
  .refine(() => true, {
    message: 'ADDITIONAL_PROPERTY_ERROR_INVOICE',
    params: {
      properties: {
        invoiceNo: 'VALIDATION_ERROR_INVOICE_001',
        invoiceDate: 'VALIDATION_ERROR_INVOICE_002',
        invoiceAmount: 'VALIDATION_ERROR_INVOICE_003',
        invoiceAmountCurrency: 'VALIDATION_ERROR_INVOICE_004',
        gtbReferenceNo: 'VALIDATION_ERROR_INVOICE_005',
        gtbReferenceDate: 'VALIDATION_ERROR_INVOICE_006',
        countryOfDestinationCode: 'VALIDATION_ERROR_INVOICE_007',
        transportMode: 'VALIDATION_ERROR_INVOICE_008',
        packageQuantity: 'VALIDATION_ERROR_INVOICE_009',
        fobAmount: 'VALIDATION_ERROR_INVOICE_010',
        paymentMeansCode: 'VALIDATION_ERROR_INVOICE_011',
        invoiceReferenceNo: 'VALIDATION_ERROR_INVOICE_019',
      },
      required: 'MISSING_PROPERTY_ERROR_INVOICE',
    },
  });

const ImportersCustomsBrokerSchema = z
  .object({
    id: z.string().min(1),
    branchId: z.union([
      z.string().min(1).max(8),
      z.string().max(0),
      z.null(),
      z.undefined(),
    ]),
  })
  .strict()
  .refine(() => true, {
    message: 'ADDITIONAL_PROPERTY_ERROR_IMPORTERS_CUSTOMS_BROKER',
    params: {
      properties: {
        id: 'VALIDATION_ERROR_IMPORTERS_CUSTOMS_BROKER_001',
        branchId: 'VALIDATION_ERROR_IMPORTERS_CUSTOMS_BROKER_002',
      },
      required: 'MISSING_PROPERTY_ERROR_IMPORTERS_CUSTOMS_BROKER',
    },
  });

const ImportersDeclarationInfoSchema = z
  .object({
    importersCustomsBroker: ImportersCustomsBrokerSchema,
    eoriNo: z.union([z.string(), z.null(), z.undefined()]),
    eoriDepartmentNo: z.union([z.string(), z.null(), z.undefined()]),
  })
  .strict()
  .refine(() => true, {
    message: 'ADDITIONAL_PROPERTY_ERROR_DECLARATION_INFO',
    params: {
      properties: {
        importersCustomsBroker:
          'VALIDATION_ERROR_IMPORTERS_DECLARATION_INFO_001',
        eoriNo: 'VALIDATION_ERROR_IMPORTERS_DECLARATION_INFO_002',
        eoriDepartmentNo: 'VALIDATION_ERROR_IMPORTERS_DECLARATION_INFO_003',
      },
      required: 'MISSING_PROPERTY_ERROR_IMPORTERS_DECLARATION_INFO',
    },
  });

const CertificateInvoiceSchema = z
  .object({
    invoiceNo: z.string().min(1),
    itemLineNos: z.array(z.number().int().min(1)).min(1),
  })
  .strict()
  .refine(() => true, {
    message: 'ADDITIONAL_PROPERTY_ERROR_CERTIFICATE_INVOICE',
    params: {
      properties: {
        invoiceNo: 'VALIDATION_ERROR_CERTIFICATE_INVOICE_001',
        itemLineNos: 'VALIDATION_ERROR_CERTIFICATE_INVOICE_002',
      },
      required: 'MISSING_PROPERTY_ERROR_CERTIFICATE_INVOICE',
    },
  });

const CertificateDocumentSchema = z
  .object({
    documentType: z.enum(['ATR', 'EUR1', 'C/O', 'FORM-A']),
    documentNo: z.union([
      z.string().length(8),
      z.string().max(0),
      z.null(),
      z.undefined(),
    ]),
    packageInfo: z.string().min(1),
    vesselNameOption: z.union([z.boolean(), z.null(), z.undefined()]),
    remarks: z.union([z.string(), z.null(), z.undefined()]),
    invoices: z.array(CertificateInvoiceSchema).min(1),
  })
  .strict()
  .refine(() => true, {
    message: 'ADDITIONAL_PROPERTY_ERROR_CERTIFICATE_DOCUMENT',
    params: {
      properties: {
        documentType: 'VALIDATION_ERROR_CERTIFICATE_DOCUMENT_001',
        documentNo: 'VALIDATION_ERROR_CERTIFICATE_DOCUMENT_002',
        packageInfo: 'VALIDATION_ERROR_CERTIFICATE_DOCUMENT_003',
        vesselNameOption: 'VALIDATION_ERROR_CERTIFICATE_DOCUMENT_004',
        remarks: 'VALIDATION_ERROR_CERTIFICATE_DOCUMENT_006',
        invoices: 'VALIDATION_ERROR_CERTIFICATE_DOCUMENT_005',
      },
      required: 'MISSING_PROPERTY_ERROR_CERTIFICATE_DOCUMENT',
    },
  });

const CertificateInfoSchema = z
  .object({
    atrAuthorizedExporter: z.union([z.boolean(), z.null(), z.undefined()]),
    eur1InvoiceOption: z.union([z.boolean(), z.null(), z.undefined()]),
    formaInvoiceOption: z.union([z.boolean(), z.null(), z.undefined()]),
    certificateDocuments: z.array(CertificateDocumentSchema).min(1),
  })
  .strict()
  .refine(() => true, {
    message: 'ADDITIONAL_PROPERTY_ERROR_CERTIFICATE_INFO',
    params: {
      properties: {
        atrAuthorizedExporter: 'VALIDATION_ERROR_CERTIFICATE_INFO_001',
        eur1InvoiceOption: 'VALIDATION_ERROR_CERTIFICATE_INFO_002',
        formaInvoiceOption: 'VALIDATION_ERROR_CERTIFICATE_INFO_003',
        certificateDocuments: 'VALIDATION_ERROR_CERTIFICATE_INFO_004',
      },
      required: 'MISSING_PROPERTY_ERROR_CERTIFICATE_INFO',
    },
  });

const ConsignorSchema = z
  .object({
    id: z.string().min(1),
    branchId: z.union([
      z.string().min(1).max(8),
      z.string().max(0),
      z.null(),
      z.undefined(),
    ]),
  })
  .strict()
  .refine(() => true, {
    message: 'ADDITIONAL_PROPERTY_ERROR_CONSIGNOR',
    params: {
      properties: {
        id: 'VALIDATION_ERROR_CONSIGNOR_001',
        branchId: 'VALIDATION_ERROR_CONSIGNOR_002',
      },
      required: 'MISSING_PROPERTY_ERROR_CONSIGNOR',
    },
  });

const DirectExportJobOrderSchema = z
  .object({
    customsCode: z
      .string()
      .length(6, { message: 'VALIDATION_ERROR_JOB_ORDER_001' }),
    exitCustomsCode: z
      .string()
      .length(6, { message: 'VALIDATION_ERROR_JOB_ORDER_002' }),
    combineItems: z.boolean().nullish(),
    consignor: ConsignorSchema,
    consignee: ConsigneeSchema,
    vehicleCountry: z.union([
      z.string().length(2, { message: 'VALIDATION_ERROR_JOB_ORDER_003' }),
      z.string().max(0),
      z.null(),
      z.undefined(),
    ]),
    bankCode: z.union([
      z.string().length(12, { message: 'VALIDATION_ERROR_JOB_ORDER_004' }),
      z.string().max(0),
      z.null(),
      z.undefined(),
    ]),
    simplifiedProcedure: z
      .union([
        z.string().nullable(),
        z.enum(['', '4', '8', '10', '11', '12', '16'], {
          message: 'VALIDATION_ERROR_JOB_ORDER_005',
        }),
      ])
      .nullish(),
    countryOfDispatch: z.union(
      [z.string().length(2), z.string().max(0), z.null(), z.undefined()],
      { message: 'VALIDATION_ERROR_JOB_ORDER_006' },
    ),
    deliveryPlace: z.union([z.string().max(40), z.null(), z.undefined()], {
      message: 'VALIDATION_ERROR_JOB_ORDER_042',
    }),
    compensatoryDutyOption: z
      .union([z.boolean(), z.null(), z.undefined()])
      .refine(() => true, { message: 'TYPE_ERROR_JOB_ORDER' }),
    declarantTaxNo: z
      .string()
      .min(1, { message: 'VALIDATION_ERROR_JOB_ORDER_007' }),
    financialResponsibleTaxNo: z
      .string()
      .min(1, { message: 'VALIDATION_ERROR_JOB_ORDER_008' }),
    carrier: CarrierSchema,
    containerNos: z.union([
      z.array(
        z.string().length(11, { message: 'VALIDATION_ERROR_JOB_ORDER_009' }),
      ),
      z.null(),
      z.undefined(),
    ]),
    vehicleId: z.union([z.string(), z.null(), z.undefined()]),
    portCode: z.union([
      z.string({ message: 'VALIDATION_ERROR_JOB_ORDER_010' }),
      z.null(),
      z.undefined(),
    ]),
    remarks: z.union([z.string().max(250), z.null(), z.undefined()], {
      message: 'VALIDATION_ERROR_JOB_ORDER_043',
    }),
    customerReference1: z.union([z.string(), z.null(), z.undefined()]),
    customerReference2: z.union([z.string(), z.null(), z.undefined()]),
    customerReference3: z.union([z.string(), z.null(), z.undefined()]),
    itemLocation: z.union([z.string(), z.null(), z.undefined()]),
    cutOffDate: z.union([z.string(), z.null(), z.undefined()]),
    invoices: z
      .array(InvoiceSchema)
      .min(1, { message: 'NO_ITEM_FOUND_ERROR_JOB_ORDER' }),
    certificateInfo: CertificateInfoSchema.nullish(),
    transportInfo: z.union([TransportInfoSchema, z.null(), z.undefined()]),
    importersDeclarationInfo: z.union([
      ImportersDeclarationInfoSchema,
      z.null(),
      z.undefined(),
    ]),
  })
  .strict({ message: 'ADDITIONAL_PROPERTY_ERROR_JOB_ORDER' })
  .superRefine((val, ctx) => {
    console.log('val: ', val);
    console.log('ctx: ', ctx);
    if (!val.customsCode) {
      ctx.addIssue({
        code: 'custom',
        message: 'CUSTOMS_CODE_MISSING',
      });
    }
  });

type DirectExportJobOrder = z.infer<typeof DirectExportJobOrderSchema>;

export { DirectExportJobOrderSchema, DirectExportJobOrder };
