import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { Page } from '@playwright/test';
import { PlaywrightWrapper } from '../utils/wrapper';
import { createLogger } from '../utils/logger';
import { Selectors } from './selectors';
import { BASE_URL } from '../config/config';
 
const logger = createLogger('airbnb-steps');
const selectors = new Selectors();
 
 
declare module '@cucumber/cucumber' {
  interface World {
    page: Page;
  }
}
 
const getWrapper = (world: any): PlaywrightWrapper => new PlaywrightWrapper(world.page);
 
When ('user selects General Liability' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.GeneralLiab);
  await wrapper.page.waitForTimeout(1000);
  logger.info('User selects General Liability');  
});

When ('user selects offering selection' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.offeringSelection);
  await this.page.locator(selectors.offeringSelection).selectOption('GL Standard');
  await wrapper.page.waitForTimeout(1000);
  logger.info('User selects Offering Selection');  
});

When ('user selects next on Offering Selection' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.NextQuali);
  await wrapper.page.waitForTimeout(1000);
  logger.info('User clicks on Next');  
});

When ('user answers GL PreQualification' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.GLPreQualification);
  for (let i=0;i<4;i++)
      {
        await this.page.keyboard.press('Tab');
        await this.page.keyboard.press('ArrowLeft');
      await wrapper.page.waitForTimeout(1000);
      }
  
  await wrapper.page.waitForTimeout(1000);
  logger.info('user enters answers for questions');  
});

When ('user next on GLpage' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.NextQuali);
  await wrapper.page.waitForTimeout(1000);
  logger.info('User clicks on Next');  
});

When ('user enters value for Estimated premium' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.fill(selectors.Estprimenm,'45000');
});

When ('user enters value for Date quote' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.fill(selectors.Datequote,'06/17/2025')
  await wrapper.page.waitForTimeout(1000);
});

  When ('user enters value in policy info' ,async function () {
    const wrapper = getWrapper(this);
  await wrapper.fill(selectors.Industrialcode,' ');
  await wrapper.fill(selectors.Industrialcode,'1541');
  await wrapper.click(selectors.deleteSSNdropdown);
  await wrapper.click(selectors.deleteSSN);
  await wrapper.fill(selectors.SSN,'465-45-4765');
  await wrapper.click(selectors.NextQuali);
  await wrapper.page.waitForTimeout(2000);
   logger.info('User enters all mandatory value in Policy info');
});

When ('user click next on Location page' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.NextQuali);
  await wrapper.page.waitForTimeout(2000);
  //logger.info('User clicks Next on Location page');
});

When ('user clicks on Additional Coverages',async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.AdditionalCoverages);
  await wrapper.click(selectors.AddCoverage);
  await wrapper.page.waitForTimeout(2000);
  logger.info('User clicks on Additional Coverages ');
});
When('user add select Category',async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.SelectCat);  
  await wrapper.page.waitForTimeout(500);
  await this.page.locator(selectors.SelectCat).selectOption('EMPLOYMENT');
  await wrapper.page.waitForTimeout(500);
  await wrapper.click(selectors.SearchGL);
  await wrapper.click(selectors.EmploymentCoverage);
  await wrapper.page.waitForTimeout(500);
  await wrapper.click(selectors.AddSelecedCoverages);
  await wrapper.page.waitForTimeout(500);
  logger.info('User add Additional Coverages and additional details');
});

When ('user click on next on GL page' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.NextQuali);
  await wrapper.page.waitForTimeout(2000);
  logger.info('User clicks Next on Location  page');
});

When('user add Additional Coverages and additional details',async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.NextQuali);
  await wrapper.page.waitForTimeout(2000);
});

When('user clicks on Add Exposure',async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.Addexposure);
});

When('user add location',async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.Addlocation);
  await wrapper.page.waitForTimeout(500);
  await this.page.locator(selectors.Addlocation).selectOption('1: 2850 S. Delaware St., San Mateo, CA');
  await this.page.keyboard.press('Tab');
}); 

When('user add class code',async function () {
  const wrapper = getWrapper(this);
  await wrapper.fill(selectors.Addclass,'0050');
  await this.page.keyboard.press('Tab');
  await this.page.keyboard.press('Tab');
});

When('user add basic amount',async function () {
  const wrapper = getWrapper(this);
  await wrapper.fill(selectors.Addbasicamount,'4500');
});

When ('user click on next Exposure page' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.NextQuali);
  await wrapper.page.waitForTimeout(2000);
  logger.info('user click on next Exposure page');
});

When ('user add GL Experience Modifier' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.fill(selectors.AddGLmodifierExp,'0.5');
  await wrapper.page.waitForTimeout(2000);
  logger.info('User add GL experience modifier');
});

When ('user add Location - Inside Premises' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.fill(selectors.Locationinside,'0.05');
  await wrapper.page.waitForTimeout(2000);
  logger.info('User add Location - Inside Premises');
});

When ('user add justification for location' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.fill(selectors.jsutificationlocationinsider,'test');
  await wrapper.page.waitForTimeout(2000);
  logger.info('User add justification Location - Inside Premises');
});

When ('user add Safety Organization' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.fill(selectors.safetyorg,'0.02');
  await wrapper.page.waitForTimeout(2000);
  logger.info('user add Safety Organization');
});

When ('user add justification for safety org' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.fill(selectors.justificationsafety,'test');
  await wrapper.page.waitForTimeout(2000);
  logger.info('user add justification for safety org');
});

When ('user clicks on next on Modifier page' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.NextQuali);
  await wrapper.page.waitForTimeout(2000);
  logger.info('user click on next Modifier page');
});

When ('user Risk Analysis add contingency' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.AddContingency);
  await wrapper.page.waitForTimeout(1000);
  logger.info('User clicks on  Add Contigancy ');  
});

When ('user add title' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.fill(selectors.AddcontigencyTitle,'test');
  await wrapper.page.waitForTimeout(1000);
  logger.info('user add title');  
});

When ('user add description' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.fill(selectors.AddContigencayDesc,'testing for playwright');
  await wrapper.page.waitForTimeout(1000);
  logger.info('user add description');  
});


When ('user add Action' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.AddContigencayAction);
  await wrapper.page.waitForTimeout(1000);
  await this.page.locator(selectors.Action).selectOption('Change policy retroactively');
  await wrapper.page.waitForTimeout(1000);
  logger.info('user add action');  
});

When ('user add duedate' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.fill(selectors.duedateAddCont,'06/17/2025');
  await wrapper.page.waitForTimeout(1000);
  logger.info('user add duedate');  
});

When ('user click on Ok on Add contingency' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.Ok);
  await wrapper.page.waitForTimeout(1000);
  logger.info('user click on OK');  
});

When ('user add click on next on Risk Analysis' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.NextQuali);
  await wrapper.page.waitForTimeout(2000);
  logger.info('user add click on next on Risk Analysis');
});


When ('user click on Close Options for general' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.Closeoption);
  await wrapper.page.waitForTimeout(1000);
  logger.info('user click on Close Options');  

});

When ('user clicks on withdraw for general' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.Withdraw);
  await wrapper.page.waitForTimeout(1000);
  logger.info('user click on Withdraw Options');  
});
