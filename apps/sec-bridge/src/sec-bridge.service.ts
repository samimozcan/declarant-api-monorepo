import { SecPrismaService } from '@app/sec-prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SecBridgeService {
  constructor(private readonly secDB: SecPrismaService) {}
  async getHello(): Promise<string> {
    try {
      // await this.secDB.secDeclaration.findMany({
      //   take: 100,
      // });
    } catch (error) {
      console.error('Error fetching secDeclaration:', error);
      return 'An error occurred';
    }

    try {
      await this.secDB.secDeclarationAdditionalInfo.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secDeclarationAdditionalInfo:', error);
    }
    try {
      await this.secDB.secAdditionalDocument.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secAdditionalDocument:', error);
    }
    try {
      await this.secDB.secArchieve.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secArchieve:', error);
    }
    try {
      await this.secDB.secBranch.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secBranch:', error);
    }
    try {
      await this.secDB.secCity.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secCity:', error);
    }
    try {
      await this.secDB.secCompany.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secCompany:', error);
    }
    try {
      await this.secDB.secCountry.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secCountry:', error);
    }
    try {
      await this.secDB.secCurrency.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secCurrency:', error);
    }
    try {
      await this.secDB.secCustoms.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secCustoms:', error);
    }
    try {
      await this.secDB.secCustomsLog.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secCustomsLog:', error);
    }
    try {
      await this.secDB.secCustomsMailLog.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secCustomsMailLog:', error);
    }
    try {
      await this.secDB.secDeclarant.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secDeclarant:', error);
    }
    try {
      await this.secDB.secDeclarationControlList.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secDeclarationControlList:', error);
    }
    try {
      await this.secDB.secDeclarationFollow.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secDeclarationFollow:', error);
    }
    try {
      await this.secDB.secExpense.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secExpense:', error);
    }
    try {
      await this.secDB.secExpenseView.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secExpenseView:', error);
    }
    try {
      await this.secDB.secFirm.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secFirm:', error);
    }
    try {
      await this.secDB.secItem.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secItem:', error);
    }
    try {
      await this.secDB.secItemAdditionalDocument.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secItemAdditionalDocument:', error);
    }
    try {
      await this.secDB.secItemContainer.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secItemContainer:', error);
    }
    try {
      await this.secDB.secItemDefinition.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secItemDefinition:', error);
    }
    try {
      await this.secDB.secItemDetail.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secItemDetail:', error);
    }
    try {
      await this.secDB.secItemDocument.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secItemDocument:', error);
    }
    try {
      await this.secDB.secItemDuty.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secItemDuty:', error);
    }
    try {
      await this.secDB.secItemReturn.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secItemReturn:', error);
    }
    try {
      await this.secDB.secItemSupplementary.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secItemSupplementary:', error);
    }
    try {
      await this.secDB.secItemTCGBOpenClose.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secItemTCGBOpenClose:', error);
    }
    try {
      await this.secDB.secItemTrademark.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secItemTrademark:', error);
    }
    try {
      await this.secDB.secLog.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secLog:', error);
    }
    try {
      await this.secDB.secMedos.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secMedos:', error);
    }
    try {
      await this.secDB.secMedosAuthorized.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secMedosAuthorized:', error);
    }
    try {
      await this.secDB.secMedosCountry.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secMedosCountry:', error);
    }
    try {
      await this.secDB.secMedosCurrencyType.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secMedosCurrencyType:', error);
    }
    try {
      await this.secDB.secMedosCustoms.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secMedosCustoms:', error);
    }
    try {
      await this.secDB.secMedosDeclarationType.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secMedosDeclarationType:', error);
    }
    try {
      await this.secDB.secMedosDocument.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secMedosDocument:', error);
    }
    try {
      await this.secDB.secMedosGoods.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secMedosGoods:', error);
    }
    try {
      await this.secDB.secMedosInvoice.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secMedosInvoice:', error);
    }
    try {
      await this.secDB.secMedosInvoiceAuthorized.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secMedosInvoiceAuthorized:', error);
    }
    try {
      await this.secDB.secMedosOriginCountry.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secMedosOriginCountry:', error);
    }
    try {
      await this.secDB.secMedosUnit.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secMedosUnit:', error);
    }
    try {
      await this.secDB.secNctsAdditionalInformation.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secNctsAdditionalInformation:', error);
    }
    try {
      await this.secDB.secNctsContainer.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secNctsContainer:', error);
    }
    try {
      await this.secDB.secNctsGuarantee.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secNctsGuarantee:', error);
    }
    try {
      await this.secDB.secNctsItem.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secNctsItem:', error);
    }
    try {
      await this.secDB.secNctsJobOrder.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secNctsJobOrder:', error);
    }
    try {
      await this.secDB.secNctsJobOrderRoute.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secNctsJobOrderRoute:', error);
    }
    try {
      await this.secDB.secNctsJobOrderT1.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secNctsJobOrderT1:', error);
    }
    try {
      await this.secDB.secNctsJobOrderT1Detail.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secNctsJobOrderT1Detail:', error);
    }
    try {
      await this.secDB.secNctsLog.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secNctsLog:', error);
    }
    try {
      await this.secDB.secNctsPackage.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secNctsPackage:', error);
    }
    try {
      await this.secDB.secNctsPreviousReference.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secNctsPreviousReference:', error);
    }
    try {
      await this.secDB.secNctsProducedDocument.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secNctsProducedDocument:', error);
    }
    try {
      await this.secDB.secNctsRoute.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secNctsRoute:', error);
    }
    try {
      await this.secDB.secNctsSeal.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secNctsSeal:', error);
    }
    try {
      await this.secDB.secNctsSensitiveGoods.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secNctsSensitiveGoods:', error);
    }
    try {
      await this.secDB.secNctsSummaryDeclaration.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secNctsSummaryDeclaration:', error);
    }
    try {
      await this.secDB.secNctsT1.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secNctsT1:', error);
    }
    try {
      await this.secDB.secNctsTransit.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secNctsTransit:', error);
    }
    try {
      await this.secDB.secNctsUser.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secNctsUser:', error);
    }
    try {
      await this.secDB.secNctsWarehouseDeclaration.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secNctsWarehouseDeclaration:', error);
    }
    try {
      await this.secDB.secOgiDocument.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secOgiDocument:', error);
    }
    try {
      await this.secDB.secOgiV2Log.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secOgiV2Log:', error);
    }
    try {
      await this.secDB.secOvercharge.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secOvercharge:', error);
    }
    try {
      await this.secDB.secParameter.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secParameter:', error);
    }
    try {
      await this.secDB.secPaymentMeans.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secPaymentMeans:', error);
    }
    try {
      await this.secDB.secProcedure.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secProcedure:', error);
    }
    try {
      await this.secDB.secProjectImport.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secProjectImport:', error);
    }
    try {
      await this.secDB.secRegulation.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secRegulation:', error);
    }
    try {
      await this.secDB.secSummaryDeclaration.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secSummaryDeclaration:', error);
    }
    try {
      await this.secDB.secSupplementary.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secSupplementary:', error);
    }
    try {
      await this.secDB.secTaxType.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secTaxType:', error);
    }
    try {
      await this.secDB.secTransitCountry.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secTransitCountry:', error);
    }
    try {
      await this.secDB.secUnionParameter.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secUnionParameter:', error);
    }
    try {
      await this.secDB.secUploadedDocument.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secUploadedDocument:', error);
    }
    try {
      await this.secDB.secValue.findMany({
        take: 100,
      });
    } catch (error) {
      console.error('Error fetching secValue:', error);
    }

    return 'Hello World!';
  }
}
