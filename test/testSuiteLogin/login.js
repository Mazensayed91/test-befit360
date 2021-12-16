const wdio = require("webdriverio");
import {conf} from '../../config'
import {getElementByxpath, arrowDown, delay} from '../../helpers/appiumHelper'
import {readCsv} from '../../helpers/csvHelper'
import {loginObjects} from '../../helpers/objectIdentifiersHelper'

const main = async () => {
    try{
        let data = readCsv('../../helpers/create_account_data.csv');
        const client = await wdio.remote(conf);

        delay(10)

        const button = await getElementByxpath(client, "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.TextView")


        button.click()
        delay(10)

        const signin = await getElementByxpath(client,"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.TextView[5]")
        signin.click()

        delay(100)


        // get all form elements
        const loginData = await loginObjects(client)
        const {email, password} = loginData;

        // set form data values
        await email.setValue(data[0].Email);
        delay(3)
        await password.setValue(data[0].Password);
        delay(3)

        // click on sign in
        const performSignIn = await getElementByxpath(client,"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.view.ViewGroup/android.widget.Button")
        console.log("performSignIn", performSignIn)

        performSignIn.click();

        delay(15)

        await client.deleteSession();

    }catch(e){
        throw e
    }

}

await main();
