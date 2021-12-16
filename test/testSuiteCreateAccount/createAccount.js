const wdio = require("webdriverio");
import {conf} from '../../config'
import {getElementByxpath, arrowDown, delay} from '../../helpers/appiumHelper'
import {readCsv} from '../../helpers/csvHelper'
import {creatAccountObjects} from '../../helpers/objectIdentifiersHelper'

const main = async () => {
    try{
        let data = readCsv('../../helpers/create_account_data.csv');
        const client = await wdio.remote(conf);

        delay(10)

        const button = await getElementByxpath(client, "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.TextView")


        button.click()
        delay(10)

        const signup = await getElementByxpath(client,"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.Button")
        signup.click()

        delay(100)


        // get all form elements
        const createAccountData = await creatAccountObjects(client, data[0]['Gender'])
        const {name, email, password, phone, birth, address, gender} = createAccountData;

        // set form data values
        await name.setValue(data[0].Name);

        delay(3)

        await email.setValue(data[0].Email);
        delay(3)
        await password.setValue(data[0].Password);
        delay(3)


        await phone.setValue(data[0].Phone);
        delay(3)


        await birth.setValue(data[0].Birth);
        delay(3)

        await address.setValue(data[0].Address);
        delay(3)
        gender.click()
        delay(3)

        // click on the down arrow to get the Sign Up button
        arrowDown(client, 12);

        delay(3)
        // click on sign up
        const performSignUp = await getElementByxpath(client,"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.view.ViewGroup/android.widget.Button")
        performSignUp.click();

        delay(15)

        await client.deleteSession();

    }catch(e){
        throw e
    }

}

await main();
