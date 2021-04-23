/**
 * Caution: Consider this file when using react-scripts
 *
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or NextJS version
 */
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DeferredExportFinancing from "views/Pages_Product_Services/Credits/DeferredExportFinancing";
import TypesOfPayment from "views/Pages_Product_Services/Foreign_Trade/TypesOfPayment";
import WithLayout from "WithLayout";
import {
  Main as MainLayout,
  Minimal as MinimalLayout,
  DocsLayout,
} from "./layouts";

import {
  Home as HomeView,
  IndexView,
  Agency as AgencyView,
  CareerListing as CareerListingView,
  CareerListingMinimal as CareerListingMinimalView,
  CareerOpening as CareerOpeningView,
  ContactPage as ContactPageView,
  Coworking as CoworkingView,
  Elearning as ElearningView,
  Enterprise as EnterpriseView,
  Service as ServiceView,
  WebBasic as WebBasicView,
  DesktopApp as DesktopAppView,
  Expo as ExpoView,
  Startup as StartupView,
  DesignCompany as DesignCompanyView,
  MobileApp as MobileAppView,
  JobListing as JobListingView,
  Vision as VisionView,
  Partnership as PartnershipView,
  Board as BoardView,
  Values as ValuesView,
  Press as PressView,
  ShortTermLiquidityFinancing as ShortTermLiquidityFinancingView,
  ProfitLossPartnership as ProfitLossPartnershipView,
  EquityPartnership as EquityPartnershipView,
  DeferredExportFinancing as DeferredExportFinancingView,
  LettersofGuarantee as LettersofGuaranteeView,
  AcceptanceAvalFinancing as AcceptanceAvalFinancingView,
  LettersCredit as LettersCreditView,
  Forward as ForwardView,
  FXTransactions as FXTransactionsView,
  PreciousMetals as PreciousMetalsView,
  Securities as SecuritiesView,
  ForeignTrade as ForeignTradeView,
  FXandTRYPayments as FXandTRYPaymentsView,
  LettersOfGuarantee as LettersOfGuaranteeView,
  TypesOfPayment as TypesOfPaymentView,
  ProductandServicesPrice as ProductandServicesPriceView,
  ContractForms as ContractFormsView,
  CustomerSatisfaction as CustomerSatisfactionView,
  KVKK as KVKKView,
  AnnualReports as AnnualReportsView,
  FinancialReports as FinancialReportsView,
  ArticlesOfAssociation as ArticlesOfAssociationView,
  PublicDisclosures as PublicDisclosuresView,
  HumanResources as HumanResourcesView,
  Announcements as AnnouncementsView,
} from "./views";

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={IndexView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/home"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={HomeView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/career-listing"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={CareerListingView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/career-listing-minimal"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={CareerListingMinimalView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/career-opening"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={CareerOpeningView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/contact-page"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={ContactPageView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/coworking"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={CoworkingView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/e-learning"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={ElearningView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/enterprise"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={EnterpriseView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/service"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={ServiceView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/web-basic"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={WebBasicView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/desktop-app"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={DesktopAppView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/expo"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={ExpoView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/agency"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={AgencyView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/startup"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={StartupView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/design-company"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={DesignCompanyView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/mobile-app"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={MobileAppView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/job-listing"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={JobListingView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/vision-mission"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={VisionView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/board"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={BoardView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/values"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={ValuesView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/press"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={PressView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/partnership"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={PartnershipView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/short-term-liquidity"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={ShortTermLiquidityFinancingView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/profit-loss-partnership"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={ProfitLossPartnershipView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/equity-partnership"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={EquityPartnershipView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/deferred-export-financing"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={DeferredExportFinancingView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/letters-of-guarantee"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={LettersofGuaranteeView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/acceptance-aval-guarantee"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={AcceptanceAvalFinancingView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/letters-of-credit"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={LettersCreditView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/forward"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={ForwardView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/fx-transactions"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={FXTransactionsView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/precious-metals"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={PreciousMetalsView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/securities"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={SecuritiesView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/foreign-trade"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={ForeignTradeView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/FX-TRY-payments"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={FXandTRYPaymentsView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/letters-of-guarantee"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={LettersOfGuaranteeView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/types-of-payment"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={TypesOfPaymentView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/product-and-services-prices"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={ProductandServicesPriceView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/contract-forms"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={ContractFormsView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/customer-satisfaction"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={CustomerSatisfactionView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/kvkk"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={KVKKView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/annual-reports"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={AnnualReportsView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/financial-reports"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={FinancialReportsView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/articles-of-association"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={ArticlesOfAssociationView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/public-disclosures"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={PublicDisclosuresView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/human-resources"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={HumanResourcesView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/announcements"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={AnnouncementsView}
            layout={MainLayout}
          />
        )}
      />
      <Redirect to="/not-found-cover" />
    </Switch>
  );
};

export default Routes;
