<template>
  <v-container class="ContactSection" fluid>
    <v-row>
      <v-col lg="12">
        <h1 class="contactSection-title">
          Everything about your business just a click away.
        </h1>
        <h2 class="contactSection-subTitle">Get a Demo in your mailbox</h2>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="getStartedbtn" color="primary" dark v-bind="attrs" v-on="on">
            GET STARTED
          </v-btn>
        </template>
        <validation-observer ref="observer" v-slot="{}">
          <form @submit.prevent = 'test'>
            <v-card>
              <v-card-title>
                <span class="text-h5">Help our Team to reach you</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <validation-observer ref="observer" v-slot="{}">
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <validation-provider
                          v-slot="{ errors }"
                          name="Name"
                          rules="required|max:10"
                        >
                          <v-text-field
                            v-model="message.name"
                            :counter="10"
                            :error-messages="errors"
                            label=" First name*"
                            required
                          ></v-text-field>
                        </validation-provider>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <validation-provider
                          v-slot="{ errors }"
                          name="middleName"
                        >
                          <v-text-field
                            v-model="message.middleName"
                            :counter="10"
                            :error-messages="errors"
                            label="Middle name"
                          ></v-text-field>
                        </validation-provider>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <validation-provider
                          v-slot="{ errors }"
                          name="Name"
                          rules="required|max:10"
                        >
                          <v-text-field
                            v-model="message.lastName"
                            :counter="10"
                            :error-messages="errors"
                            label="Last name*"
                            required
                          ></v-text-field>
                        </validation-provider>
                      </v-col>
                      <v-col cols="12">
                        <validation-provider
                          v-slot="{ errors }"
                          name="phoneNumber"
                          :rules="{
                            required: true,
                            digits: 10,
                          }"
                        >
                          <v-text-field
                            v-model="message.phoneNumber"
                            :counter="10"
                            :error-messages="errors"
                            label="Phone Number*"
                            required
                          ></v-text-field>
                        </validation-provider>
                      </v-col>
                      <v-col cols="12">
                        <validation-provider
                          v-slot="{ errors }"
                          name="email"
                          rules="required|email"
                        >
                          <v-text-field
                            v-model="message.email"
                            :counter="30"
                            :error-messages="errors"
                            label="Email*"
                            required
                          ></v-text-field>
                        </validation-provider>
                      </v-col>
                      <v-col cols="12">
                        <validation-provider
                          v-slot="{ errors }"
                          name="Message"
                          rules="required|max:10"
                        >
                          <v-text-field
                            v-model="message.messege"
                            :counter="500"
                            :error-messages="errors"
                            label="Message*"
                            required
                          >
                          </v-text-field>
                        </validation-provider>
                      </v-col>
                    </v-row>
                  </validation-observer>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  SEND
                </v-btn>
              </v-card-actions>
            </v-card>
          </form>
        </validation-observer>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
// import {db} from '../firebase';
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },

  name: "ContactSection",
  data(){
    return{
    dialog: false,
    message:{
      name:'',
      middleName:'',
      lastName:'',
      email:'',
      phoneNumber:'',
      message:'',
    },
    }
  },
  methods:{ 
     test:(e)=>{
       e.preventDefault()
       alert("Message Sent Successfully");
    },
    // Submit: (event)=>{
    //             event.preventDefault()
    //             alert("Message Sent Successfully");
    //             db.collection('messages').add(this.message).then(() => {
    //                 alert("Message Sent Successfully");
                  
    //                 this.message.name = ''
    //                 this.message.middleName = ''
    //                 this.message.lastName = ''
    //                 this.message.email = ''
    //                 this.message.phoneNumber = ''
    //                 this.message.message = ''
    //             }).catch((error) => {
    //                 console.log(error);
    //             });
    //         }
}
};
</script>
<style scoped>
h1.contactSection-title {
  margin-top: 50px;
  font-size: 50px;
  font-weight: 600;
  line-height: 56px;
  width: 70%;
  align-items: center;
  justify-content: center;
  display: inline-block;
}
h2.contactSection-subTitle {
  color: #ffb032;
  font-size: 25px;
}
.ContactSection {
  background: rgba(50, 129, 255, 0.05);
  margin-bottom: 20px;
  padding-bottom: 50px;
}
div.intro-contactFrom {
  display: inline-flex;
  align-content: left;
}
@media only screen and (max-width: 600px) {
  h1.contactSection-title {
    font-size: 25px;
    line-height: 35px;
    width: 100%;
  }
  h2.contactSection-subTitle {
    font-size: 25px;
  }
  .getStartedbtn{
    margin-bottom: 50px;
  }
}
</style>