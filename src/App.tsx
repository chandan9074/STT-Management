import { Suspense, useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import * as PATH from "./helpers/Slug";
import NotFound from "./pages/NotFound";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Billing, Dashboard, Activity, AddScript, AddSpeech, AllCheckedAudios, AllCheckedAudiosUpload, AllTarget, AnnotatedFiles, AnnotatedFilesUpload, Annotation, AnnotationUpload, Assign, AssignContainer, AudioManagement, CheckingUploadAudio, CheckingStatus, CheckingStatusUpload, CollectedAudio, CreateTarget, Device, Draft, EditScript, EditSpeeches, EditUser, Organizer, PaymentHistory, PhonemeLevel, PhonemeLevelUpload, PhonemeLevelUploadVal, PhonemeLevelValidation, RecreateTarget, Role, Script, SentenceLevel, SentenceLevelUpload, SentenceLevelUploadVal, SentenceLevelValidation, Speech, Tag, UploadAudio, UserForm, UserManagement, ValidatedFiles, ValidatedFilesUpload, Validation, ValidationUpload, WordLevel, WordLevelUpload, WordLevelUploadVal, WordLevelValidation } from "./helpers/ComponentLoad";

function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      once: true,
      offset: 220,
      // delay: 150,
      mirror: true,
      duration: 1000,
    });
  }, []);

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path="/" element={<Navigate to={PATH.BILLING_PATH} replace />} />
            <Route path={PATH.ASSIGN_PATH} element={<Navigate to={`${PATH.ASSIGN_PATH}/${PATH.ALL_TARGET_PTAH}`} replace />} />
            <Route path={PATH.BILLING_PATH} element={<Billing />} />
            <Route
              path={`${PATH.BILLING_PAYMENT_HISTORY_PATH}/:id`}
              element={<PaymentHistory />}
            />
            <Route path={PATH.DASHBOARD_PATH} element={<Dashboard />} />
            <Route path={PATH.SCRIPT_PATH} element={<Script />} />
            <Route path={PATH.DASHBOARD_PATH} element={<Dashboard />} />
            <Route path={PATH.CREATE_SCRIPT} element={<AddScript />} />
            <Route path={`${PATH.EDIT_SCRIPT_PATH}/:id`} element={<EditScript />} />
            <Route path={PATH.USER_PATH} element={<UserManagement />} />

            {/* <Route path={PATH.DASHBOARD_PATH} element={<Dashboard />} /> */}
            <Route path={`${PATH.ACTIVE_USER_PATH}/:id`} element={<Activity />} />
            <Route path={`${PATH.ACTIVE_USER_PATH}/:id/${PATH.USER_MANAGEMENT_SPEECHES_PATH}/:sId`} element={<Speech />} />
            <Route path="*" element={<NotFound />} />

            <Route path={PATH.CREATE_USER_PATH} element={<UserForm />} />
            <Route path={`${PATH.EDIT_USER_PATH}/:id`} element={<EditUser />} />

            {/* Assign */}
            <Route path={PATH.ASSIGN_PATH} element={<Assign />} >
              <Route path={PATH.ALL_TARGET_PTAH} element={<AssignContainer />} >
                <Route path='' element={<AllTarget />} />
                {/*<Route path={PATH.CREATE_TARGET_PATH} element={<CreateTarget />} />*/}
              </Route>
            </Route>
            <Route path={PATH.DRAFT_PATH} element={<Draft />} />
            <Route path={PATH.CREATE_TARGET_PATH} element={<CreateTarget />} />
            <Route path={`${PATH.RECREATE_TARGET_PATH}/:id`} element={<RecreateTarget />} />
            <Route path={`${PATH.EDIT_SPEECHES_PATH}/:id`} element={<EditSpeeches />} />


            <Route path={`${PATH.AUDIO_PATH}/${PATH.COLLECTING_AUDIO}`} element={<AudioManagement />} />


            {/* <Route path={PATH.SCRIPT} element={<Script />} /> */}

            {/* test */}
            <Route path={PATH.AUDIO_PATH} element={<AudioManagement />} >
              <Route path={PATH.COLLECTING_AUDIO}  >
                <Route path='' element={<CollectedAudio />} />
                <Route path={PATH.CHECKING}>
                  {/* <Route path='' element={<Checking />} /> */}
                  <Route path={PATH.CHECKING_STATUS} element={<CheckingStatus />} />
                  <Route path={PATH.ALL_CHECKED_AUDIOS} element={<AllCheckedAudios />} />
                </Route>
                <Route path={PATH.ANNOTAION}>
                  <Route path={PATH.ANNOTAION_TYPE} element={<Annotation />} />
                  <Route path={PATH.SENETENCE_LEVEL} element={<SentenceLevel />} />
                  <Route path={PATH.WORD_LEVEL} element={<WordLevel />} />
                  <Route path={PATH.PHONEME_LEVEL} element={<PhonemeLevel />} />
                  <Route path={PATH.ANNOTATED_FILES} element={<AnnotatedFiles />} />
                </Route>
                <Route path={PATH.VALIDATION}>
                  <Route path="" element={<Validation />} />
                  <Route path={PATH.SENETENCE_LEVEL} element={<SentenceLevelValidation />} />
                  <Route path={PATH.WORD_LEVEL} element={<WordLevelValidation />} />
                  <Route path={PATH.PHONEME_LEVEL} element={<PhonemeLevelValidation />} />
                  <Route path={PATH.VALIDATED_FILES} element={<ValidatedFiles />} />
                </Route>
              </Route>
              <Route path={PATH.UPLOAD_AUDION_VIDEO_PATH}>
                <Route path='' element={<UploadAudio />} />
                <Route path={PATH.ADD_SPEECH_PATH} element={<AddSpeech />} />
                <Route path={PATH.CHECKING}>
                  <Route path='' element={<CheckingUploadAudio />} />
                  <Route path={PATH.CHECKING_STATUS} element={<CheckingStatusUpload />} />
                  <Route path={PATH.ALL_CHECKED_AUDIOS} element={<AllCheckedAudiosUpload />} />
                </Route>
                <Route path={PATH.ANNOTAION}>
                  <Route path={PATH.ANNOTAION_TYPE} element={<AnnotationUpload />} />
                  <Route path={PATH.SENETENCE_LEVEL} element={<SentenceLevelUpload />} />
                  <Route path={PATH.WORD_LEVEL} element={<WordLevelUpload />} />
                  <Route path={PATH.PHONEME_LEVEL} element={<PhonemeLevelUpload />} />
                  <Route path={PATH.ANNOTATED_FILES} element={<AnnotatedFilesUpload />} />
                </Route>
                <Route path={PATH.VALIDATION}>
                  <Route path="" element={<ValidationUpload />} />
                  <Route path={PATH.SENETENCE_LEVEL} element={<SentenceLevelUploadVal />} />
                  <Route path={PATH.WORD_LEVEL} element={<WordLevelUploadVal />} />
                  <Route path={PATH.PHONEME_LEVEL} element={<PhonemeLevelUploadVal />} />
                  <Route path={PATH.VALIDATED_FILES} element={<ValidatedFilesUpload />} />
                </Route>
              </Route>
            </Route>
            <Route path={PATH.ORGANIZER_PATH} element={<Organizer />}>
              <Route path={PATH.ROLE} element={<Role />} />
              <Route path={PATH.TAG} element={<Tag />} />
              <Route path={PATH.DEVICE} element={<Device />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
