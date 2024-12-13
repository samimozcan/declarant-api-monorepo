import { z } from 'zod';

const PurchaseOrderItemSchema = z.object({
  itemNo: z
    .string({
      errorMap: () => ({
        message: 'TYPE_ERROR_PURCHASE_ORDER_ITEM',
      }),
    })
    .nullish(),
  articleCode: z
    .string({
      errorMap: () => ({
        message: 'TYPE_ERROR_PURCHASE_ORDER_ITEM',
      }),
    })
    .nullish(),
  description: z
    .string({
      errorMap: () => ({
        message: 'TYPE_ERROR_PURCHASE_ORDER_ITEM',
      }),
    })
    .nullish(),
  remarks: z
    .string({
      errorMap: () => ({
        message: 'TYPE_ERROR_PURCHASE_ORDER_ITEM',
      }),
    })
    .nullish(),
  currency: z
    .string({
      errorMap: () => ({
        message: 'TYPE_ERROR_PURCHASE_ORDER_ITEM',
      }),
    })
    .nullish(),
  netPrice: z
    .string({
      errorMap: () => ({
        message: 'TYPE_ERROR_PURCHASE_ORDER_ITEM',
      }),
    })
    .nullish(),
  unit: z
    .string({
      errorMap: () => ({
        message: 'TYPE_ERROR_PURCHASE_ORDER_ITEM',
      }),
    })
    .nullish(),
  purchaseOrderNo: z
    .string({
      errorMap: () => ({
        message: 'TYPE_ERROR_PURCHASE_ORDER_ITEM',
      }),
    })
    .nullish(),
  quantity: z.number().nullish(),
  originCountry: z
    .string({
      errorMap: () => ({
        message: 'TYPE_ERROR_PURCHASE_ORDER_ITEM',
      }),
    })
    .nullish(),
});

const PurchaseOrderInfoSchema = z
  .object({
    purchaseOrderNo: z
      .string({
        errorMap: () => ({ message: 'TYPE_ERROR_PURCHASE_ORDER_INFO' }),
      })
      .nullish(),
    purchaseOrderDate: z
      .string({
        errorMap: () => ({ message: 'TYPE_ERROR_PURCHASE_ORDER_INFO' }),
      })
      .nullish(),
    remarks: z
      .string({
        errorMap: () => ({ message: 'TYPE_ERROR_PURCHASE_ORDER_INFO' }),
      })
      .nullish(),
    purchaseOrderItems: z
      .array(PurchaseOrderItemSchema, {
        message: 'TYPE_ERROR_PURCHASE_ORDER_INFO',
      })
      .nullish(),
  })
  .strict({ message: 'ADDITIONAL_PROPERTY_ERROR_PURCHASE_ORDER_INFO' });

const ItemImportSchema = z
  .object({
    articleCode: z.string({
      errorMap: () => ({ message: 'VALIDATION_ERROR_ITEM_046' }),
    }),
    grossWeight: z.number({
      errorMap: () => ({ message: 'VALIDATION_ERROR_ITEM_009' }),
    }),
    hsCode: z.string({
      errorMap: () => ({ message: 'VALIDATION_ERROR_ITEM_005' }),
    }),
    itemAmount: z.number({
      errorMap: () => ({ message: 'VALIDATION_ERROR_ITEM_006' }),
    }),
    itemLineNo: z
      .number({
        errorMap: () => ({ message: 'VALIDATION_ERROR_ITEM_001' }),
      })
      .min(1),
    itemQuantity: z.number({
      errorMap: () => ({ message: 'VALIDATION_ERROR_ITEM_012' }),
    }),
    itemQuantityUnit: z.string({
      errorMap: () => ({ message: 'TYPE_ERROR_ITEM' }),
    }),
    measurementQuantity: z.number({
      errorMap: () => ({ message: 'TYPE_ERROR_ITEM' }),
    }),
    measurementUnit: z.string({
      errorMap: () => ({ message: 'TYPE_ERROR_ITEM' }),
    }),
    netWeight: z.number({
      errorMap: () => ({ message: 'VALIDATION_ERROR_ITEM_010' }),
    }),
    originCountry: z.string({
      errorMap: () => ({ message: 'VALIDATION_ERROR_ITEM_002' }),
    }),

    // Optional
    description: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_ITEM_008' }),
      })
      .nullish(),
    itemAmountCurrency: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_ITEM_007' }),
      })
      .nullish(),
    itemFobAmount: z
      .number({
        errorMap: () => ({ message: 'TYPE_ERROR_ITEM' }),
      })
      .nullish(),
    packageQuantity: z
      .number({
        errorMap: () => ({ message: 'VALIDATION_ERROR_ITEM_011' }),
      })
      .nullish(),
    packageType: z
      .string({
        errorMap: () => ({ message: 'TYPE_ERROR_ITEM' }),
      })
      .nullish(),
    purchaseOrderLineNo: z
      .string({
        errorMap: () => ({ message: 'TYPE_ERROR_ITEM' }),
      })
      .nullish(),
    purchaseOrderNo: z
      .string({
        errorMap: () => ({ message: 'TYPE_ERROR_ITEM' }),
      })
      .nullish(),
    remarks: z
      .string({
        errorMap: () => ({ message: 'TYPE_ERROR_ITEM' }),
      })
      .nullish(),
    usedGoods: z
      .string({
        errorMap: () => ({ message: 'TYPE_ERROR_ITEM' }),
      })
      .nullish(),
  })
  .strict({ message: 'ADDITIONAL_PROPERTY_ERROR_ITEM' });

const InvoiceImportSchema = z
  .object({
    invoiceDate: z.string({
      errorMap: () => ({ message: 'VALIDATION_ERROR_INVOICE_002' }),
    }),
    invoiceNo: z.string({
      errorMap: () => ({ message: 'VALIDATION_ERROR_INVOICE_001' }),
    }),
    items: z
      .array(ItemImportSchema, {
        errorMap: () => ({ message: 'NO_ITEM_FOUND_ERROR_INVOICE' }),
      })
      .min(1),
    totalInvoiceAmount: z.number({
      errorMap: () => ({ message: 'TYPE_ERROR_INVOICE' }),
    }),

    // Optional
    invoiceAmountCurrency: z
      .string({
        errorMap: () => ({ message: 'TYPE_ERROR_INVOICE' }),
      })
      .nullish(),
    invoiceFobAmount: z
      .number({
        errorMap: () => ({ message: 'VALIDATION_ERROR_INVOICE_010' }),
      })
      .nullish(),
    packageQuantity: z
      .number({
        errorMap: () => ({ message: 'VALIDATION_ERROR_INVOICE_009' }),
      })
      .nullish(),
    paymentMeansCode: z
      .enum(
        [
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
        ],
        {
          errorMap: () => ({ message: 'VALIDATION_ERROR_INVOICE_011' }),
        },
      )
      .nullish(),
    totalGrossWeight: z
      .number({
        errorMap: () => ({ message: 'TYPE_ERROR_INVOICE' }),
      })
      .nullish(),
    totalNetWeight: z
      .number({
        errorMap: () => ({ message: 'TYPE_ERROR_INVOICE' }),
      })
      .nullish(),
  })
  .strict({ message: 'ADDITIONAL_PROPERTY_ERROR_INVOICE' });

const CarrierImportSchema = z
  .object({
    taxNo: z
      .string({ errorMap: () => ({ message: 'VALIDATION_ERROR_CARRIER_001' }) })
      .min(1, { message: 'VALIDATION_ERROR_CARRIER_001' })
      .nullish(),
    branchId: z
      .string({ errorMap: () => ({ message: 'VALIDATION_ERROR_CARRIER_003' }) })
      .max(8, { message: 'VALIDATION_ERROR_CARRIER_003' })
      .nullish(),
    name: z
      .string({ errorMap: () => ({ message: 'VALIDATION_ERROR_CARRIER_002' }) })
      .min(1, { message: 'VALIDATION_ERROR_CARRIER_002' })
      .nullish(),
  })
  .strict({
    message: 'ADDITIONAL_PROPERTY_ERROR_CARRIER',
  });

const ConsigneeImportSchema = z
  .object({
    taxNo: z
      .string({
        errorMap: () => ({
          message: 'VALIDATION_ERROR_CONSIGNEE_001',
        }),
      })
      .min(1),
    branchId: z
      .string({
        errorMap: () => ({
          message: 'TYPE_ERROR_CONSIGNEE',
        }),
      })
      .nullish(),
    name: z
      .string({ errorMap: () => ({ message: 'TYPE_ERROR_CONSIGNEE' }) })
      .min(1)
      .nullish(),
  })
  .strict({
    message: 'ADDITIONAL_PROPERTY_ERROR_CONSIGNEE',
  });

const ConsignorImportSchema = z
  .object({
    branchId: z
      .string({
        errorMap: () => ({ message: 'TYPE_ERROR_CONSIGNOR' }),
      })
      .nullish(),
    eoriNo: z.string().min(1, { message: 'TYPE_ERROR_CONSIGNOR' }).nullish(),
    name: z
      .string({ errorMap: () => ({ message: 'TYPE_ERROR_CONSIGNOR' }) })
      .min(1),
    countryCode: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_CONSIGNOR_002' }),
      })
      .length(2),
    cityName: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_CONSIGNOR_003' }),
      })
      .min(1, { message: 'VALIDATION_ERROR_CONSIGNOR_003' })
      .nullish(),
    citySubdivisionName: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_CONSIGNOR_008' }),
      })
      .max(120, { message: 'VALIDATION_ERROR_CONSIGNOR_008' })
      .nullish(),
    streetName: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_CONSIGNOR_004' }),
      })
      .min(1)
      .max(120, { message: 'VALIDATION_ERROR_CONSIGNOR_004' })
      .nullish(),
    postalCode: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_CONSIGNOR_007' }),
      })
      .max(10, { message: 'VALIDATION_ERROR_CONSIGNOR_007' })
      .nullish(),
    telephone: z
      .string({
        errorMap: () => ({ message: 'TYPE_ERROR_CONSIGNOR' }),
      })
      .nullish(),
    fax: z
      .string({
        errorMap: () => ({ message: 'TYPE_ERROR_CONSIGNOR' }),
      })
      .nullish(),
  })
  .strict({
    message: 'ADDITIONAL_PROPERTY_ERROR_CONSIGNOR',
  });

const PaymentImportSchema = z
  .object({
    TBFID: z
      .string({ errorMap: () => ({ message: 'TYPE_ERROR_PAYMENT' }) })
      .nullish(),
    paymentAmount: z
      .number({ errorMap: () => ({ message: 'TYPE_ERROR_PAYMENT' }) })
      .nullish(),
    paymentMeansCode: z
      .string({ errorMap: () => ({ message: 'TYPE_ERROR_PAYMENT' }) })
      .nullish(),
    bankCode: z.string({ errorMap: () => ({ message: 'TYPE_ERROR_PAYMENT' }) }),
    currencyCode: z
      .string({ errorMap: () => ({ message: 'TYPE_ERROR_PAYMENT' }) })
      .nullish(),
  })
  .strict({
    message: 'ADDITIONAL_PROPERTY_ERROR_PAYMENT',
  });

const DirectImportJobOrderSchema = z
  .object({
    consignee: ConsigneeImportSchema,
    consignor: ConsignorImportSchema,
    customerReference1: z.string({
      errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }),
    }),
    declarationType: z.string({
      errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }),
    }),
    declarantTaxNo: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_JOB_ORDER_007' }),
      })
      .min(1),
    instructionDate: z.string({
      errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }),
    }),
    instructionId: z.string({
      errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }),
    }),

    bankCode: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_JOB_ORDER_004' }),
      })
      .length(12, { message: 'VALIDATION_ERROR_JOB_ORDER_004' })
      .nullish(),
    borderTransport: z
      .object({
        transportMode: z.enum(['1', '2', '3', '4', '5', '6', '7']).nullish(),
        meansCode: z
          .string({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
          .nullish(),
        meansIdentification: z
          .string({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
          .nullish(),
        meansNationalityCode: z
          .string({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
          .nullish(),
      })
      .nullish(),
    carrier: CarrierImportSchema.nullish(),
    combineItems: z
      .boolean({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
      .nullish(),
    containerNos: z
      .array(
        z
          .string({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
          .length(11, { message: 'VALIDATION_ERROR_JOB_ORDER_009' }),
      )
      .nullish(),
    contractType: z
      .string({
        errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }),
      })
      .nullish(),
    countryOfFirstDestination: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_JOB_ORDER_006' }),
      })
      .nullish(),
    customerReference2: z
      .string({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
      .nullish(),
    customerReference3: z
      .string({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
      .nullish(),
    customsCode: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_JOB_ORDER_001' }),
      })
      .length(6, { message: 'VALIDATION_ERROR_JOB_ORDER_001' })
      .nullish(),
    cutOffDate: z
      .string({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
      .nullish(),
    deliveryPlace: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_JOB_ORDER_042' }),
      })
      .nullish(),
    destinationCustomsCode: z
      .string({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
      .nullish(),
    financialResponsibleTaxNo: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_JOB_ORDER_008' }),
      })
      .min(1, { message: 'VALIDATION_ERROR_JOB_ORDER_008' }),
    fobValue: z
      .object({
        amount: z
          .number({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
          .nullish(),
        currencyCode: z
          .string({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
          .nullish(),
      })
      .nullish(),
    freightValue: z
      .object({
        amount: z
          .number({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
          .nullish(),
        currencyCode: z
          .string({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
          .nullish(),
      })
      .nullish(),
    incoterms: z
      .string({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
      .nullish(),
    insuranceValue: z
      .object({
        amount: z
          .number({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
          .nullish(),
        currencyCode: z
          .string({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
          .nullish(),
      })
      .nullish(),
    invoices: z.array(InvoiceImportSchema).nullish(),
    locateOfItems: z
      .string({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
      .nullish(),
    mainTransport: z
      .object({
        transportMode: z.enum(['1', '2', '3', '4', '5', '6', '7']).nullish(),
        meansCode: z
          .string({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
          .nullish(),
        meansIdentification: z
          .string({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
          .nullish(),
        meansNationalityCode: z
          .string({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
          .nullish(),
      })
      .nullish(),
    payments: z.array(PaymentImportSchema).nullish(),
    payableValue: z
      .object({
        amount: z
          .number({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
          .nullish(),
        currencyCode: z
          .string({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
          .nullish(),
      })
      .nullish(),
    portCode: z
      .string({
        errorMap: () => ({ message: 'VALIDATION_ERROR_JOB_ORDER_010' }),
      })
      .nullish(),
    procedure: z
      .string({
        errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }),
      })
      .nullish(),
    purchaseOrderInfo: z.array(PurchaseOrderInfoSchema).nullish(),
    totalGrossWeight: z
      .object({
        amount: z
          .number({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
          .nullish(),
        unit: z
          .string({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
          .nullish(),
      })
      .nullish(),
    totalNetWeight: z
      .object({
        amount: z
          .number({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
          .nullish(),
        unit: z
          .string({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
          .nullish(),
      })
      .nullish(),
    totalPackages: z
      .object({
        amount: z
          .number({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
          .nullish(),
        unit: z
          .string({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
          .nullish(),
      })
      .nullish(),
    totalPieces: z
      .object({
        amount: z
          .number({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
          .nullish(),
        unit: z
          .string({ errorMap: () => ({ message: 'TYPE_ERROR_JOB_ORDER' }) })
          .nullish(),
      })
      .nullish(),
  })
  .strict({
    message: 'ADDITIONAL_PROPERTY_ERROR_JOB_ORDER',
  });

export { DirectImportJobOrderSchema };
