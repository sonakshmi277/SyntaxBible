//Selenium for autofilling form

const {Builder,By} =require("selenium-webdriver");
async function runSelenium(user){
	let driver;
	try{
		driver=await new Builder().forBrowser("chrome").build();
		await driver.get("https://localhost:3000/applyNew");
		await driver.findElement(By.name("name")).sendKeys(user.Name||'');
		await driver.findElement(By.name("email")).sendKeys(user.Email||'');
		await driver.findElement(By.name("age")).sendKeys(user.Age.toString()||'');	
	}
	catch{
		console.log("Error in runSelenium:",error);
		throw error;
	}
	finally{
		if(driver){
			await driver.quit();
			console.log("Selenium driver quits");
		
		}
	}
}
module.exports=runSelenium;