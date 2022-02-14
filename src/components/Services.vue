<template>
  <v-main>
    <v-container class="container">
      <v-row justify="center">
        <v-col lg="12">
          <h1 class="section-title">
            Learning resources.
            <span class="second-text"> At your finger tips.</span>
          </h1>
        </v-col>
        <v-col md="12">
          <div>
            <v-tabs centered>
              <v-tab @click="activeContainer = 'Video Streaming'"
                >Video Streaming</v-tab
              >
              <v-tab @click="activeContainer = 'Mock Exams'">Mock Exams</v-tab>
              <v-tab @click="activeContainer = 'Discussion Forum'"
                >Discussion Forum</v-tab
              >
              <v-tab @click="activeContainer = 'Notes'">Notes</v-tab>
              <v-tab @click="activeContainer = 'Progress'">Progress</v-tab>
              <!-- <v-tab @click="activeContainer = 'Accounting'">Accounting</v-tab>
              <v-tab @click="activeContainer = 'Reports'">Reports</v-tab> -->
            </v-tabs>
          </div>
        </v-col>
        <slot v-if="activeContainer == 'Video Streaming'">
          <v-col md="5">
            <h1>Video Streaming</h1>
            <p>
              The quality of the video stream are always guaranteed to be of the
              highest quality. Well designed videos are structured for long time
              retention.
            </p>
          </v-col>
          <v-col md=" 7">
            <v-img
              class="homeImg"
              max-height="400"
              max-width="600"
              src="../assets/ok.png"
            ></v-img>
          </v-col>
        </slot>
        <slot v-if="activeContainer == 'Mock Exams'">
          <v-col md="5">
            <h1>Mock Exams</h1>
            <p>
              Practice. Practice. Practice. Practice more and be competitive
              with our mock exams. Completing the exam within the specified time
              is a must.
            </p>
          </v-col>
          <v-col md=" 7">
            <v-img
              class="homeImg"
              max-height="400"
              max-width="600"
              src="../assets/ok.png"
            ></v-img>
          </v-col>
        </slot>
        <slot v-if="activeContainer == 'Discussion Forum'">
          <v-col md="5">
            <h1>Discussion Forum</h1>
            <p>
              Have confusions ? Need community help ? Make your doubts clear by
              asking a question. You can choose which answer is right and mark
              it as a correct answer.
            </p>
          </v-col>
          <v-col md=" 7">
            <v-img
              class="homeImg"
              max-height="400"
              max-width="600"
              src="../assets/ok.png"
            ></v-img>
          </v-col>
        </slot>
        <slot v-if="activeContainer == 'Notes'">
          <v-col md="5">
            <h1>Notes</h1>
            <p>
              Notes are paramount to learning experience. Videos along with the
              notes help you increase the details knowledge of the subject.
            </p>
          </v-col>
          <v-col md=" 7">
            <v-img
              class="homeImg"
              max-height="400"
              max-width="600"
              src="../assets/ok.png"
            ></v-img>
          </v-col>
        </slot>
        <slot v-if="activeContainer == 'Progress'">
          <v-col md="5">
            <h1>Progress</h1>
            <p>
              Track you results. Make self assessment if you can. If you can't,
              we will help you. Choose what you should revise based on these
              assessments.
            </p>
          </v-col>
          <v-col md=" 7">
            <v-img
              class="homeImg"
              max-height="400"
              max-width="600"
              src="../assets/ok.png"
            ></v-img>
          </v-col>
        </slot>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "Services",

  data() {
    return {
      activeContainer: "Video Streaming",
    };
  },
};
</script>
<style scoped>
.container {
  padding-top: 80px;
}
.second-text {
  color: #ffc107;
}
h1.section-title {
  font-size: 30px;
}
h1 {
  font-size: 30px;
}
</style>