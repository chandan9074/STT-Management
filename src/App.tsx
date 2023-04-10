import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Billing from "./pages/Billing";
import PaymentHistory from "./pages/Billing/PaymentHistory";
import * as PATH from "./helpers/Slug";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Script from "./pages/Script";
import AddScript from "./components/containers/script/AddScript";
import UserManagement from "./pages/UserManagement";
import Activity from "./pages/UserManagement/Activity";
import UserForm from "./components/containers/userManagement/UserForm";
import Assign from "./pages/Assign";
import AudioManagement from "./pages/AudioManagement";
import AssignContainer from "./components/containers/AssignContainer";
import AllTarget from "./components/containers/AssignContainer/AllTarget";
import CreateTarget from "./pages/Assign/CreateTarget";
import EditScript from "./components/containers/script/EditScript";
import EditSpeeches from "./components/containers/AssignContainer/AllTarget/EditSpeeches";
import RecreateTarget from "./pages/Assign/RecreateTarget";
import Speech from "./pages/UserManagement/Speech";
import CollectedAudio from "./pages/AudioManagement/CollectedAudio";
import CheckingStatus from "./pages/AudioManagement/CollectedAudio/Checking/CheckingStatus";
import AllCheckedAudios from "./pages/AudioManagement/CollectedAudio/Checking/AllCheckedAudios";
import UploadAudio from "./pages/AudioManagement/UploadAudio";
import Annotation from "./pages/AudioManagement/CollectedAudio/Annotation";
import SentenceLevel from "./pages/AudioManagement/CollectedAudio/Annotation/SentenceLevel";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnnotatedFiles from "./pages/AudioManagement/CollectedAudio/Annotation/AnnotatedFiles";
import WordLevel from "./pages/AudioManagement/CollectedAudio/Annotation/WordLevel";
import PhonemeLevel from "./pages/AudioManagement/CollectedAudio/Annotation/PhonemeLevel";
import Validation from "./pages/AudioManagement/CollectedAudio/Validation";
import SentenceLevelValidation from "./pages/AudioManagement/CollectedAudio/Validation/SentenceLevelValidation";
import WordLevelValidation from "./pages/AudioManagement/CollectedAudio/Validation/WordLevelValidation";
import PhonemeLevelValidation from "./pages/AudioManagement/CollectedAudio/Validation/PhonemeLevelValidation";
import CheckingUploadAudio from "./pages/AudioManagement/UploadAudio/Checking";
import CheckingStatusUpload from "./pages/AudioManagement/UploadAudio/Checking/CheckingStatusUpload";
import AllCheckedAudiosUpload from "./pages/AudioManagement/UploadAudio/Checking/AllCheckedSpeechUpload";
import AnnotationUpload from "./pages/AudioManagement/UploadAudio/Annotation";
import SentenceLevelUpload from "./pages/AudioManagement/UploadAudio/Annotation/SentenceLevelUpload";
import WordLevelUpload from "./pages/AudioManagement/UploadAudio/Annotation/WordLevelUpload";
import PhonemeLevelUpload from "./pages/AudioManagement/UploadAudio/Annotation/PhonemeLevelUpload";
import ValidationUpload from "./pages/AudioManagement/UploadAudio/Validation";
import SentenceLevelUploadVal from "./pages/AudioManagement/UploadAudio/Validation/SentenceLevelUploadVal";
import WordLevelUploadVal from "./pages/AudioManagement/UploadAudio/Validation/WordLevelUploadVal";
import PhonemeLevelUploadVal from "./pages/AudioManagement/UploadAudio/Validation/PhonemeLevelUploadVal";
import Organizer from "./pages/Organizer";
import Role from "./pages/Organizer/Role";
import Tag from "./pages/Organizer/Tag";
import Device from "./pages/Organizer/Device";
import AddSpeech from "./components/containers/AudioManagement/UploadAuidioVideo/AddSpeech";
import AnnotatedFilesUpload from "./pages/AudioManagement/UploadAudio/Annotation/AnnotatedFilesUpload";
import ValidatedFiles from "./pages/AudioManagement/CollectedAudio/Validation/ValidatedFiles";

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

          {/* Assign */}
          <Route path={PATH.ASSIGN_PATH} element={<Assign />} >
            <Route path={PATH.ALL_TARGET_PTAH} element={<AssignContainer />} >
              <Route path='' element={<AllTarget />} />
              {/*<Route path={PATH.CREATE_TARGET_PATH} element={<CreateTarget />} />*/}
            </Route>
          </Route>
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
                <Route path={PATH.ANNOTATED_FILES} element={<AnnotatedFiles />} />
              </Route>
              <Route path={PATH.VALIDATION}>
                <Route path="" element={<ValidationUpload />} />
                <Route path={PATH.SENETENCE_LEVEL} element={<SentenceLevelUploadVal />} />
                <Route path={PATH.WORD_LEVEL} element={<WordLevelUploadVal />} />
                <Route path={PATH.PHONEME_LEVEL} element={<PhonemeLevelUploadVal />} />
                <Route path={PATH.ANNOTATED_FILES} element={<AnnotatedFilesUpload />} />
              </Route>
            </Route>
          </Route>
          <Route path={PATH.ORGANIZER_PATH} element={<Organizer/>}>
            <Route path={PATH.ROLE} element={<Role/>}/>
            <Route path={PATH.TAG} element={<Tag/>}/>
            <Route path={PATH.DEVICE} element={<Device/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
