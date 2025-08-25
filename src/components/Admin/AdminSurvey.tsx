import { useState } from "react";
import EngagementOverview from "../AdminDashboard/AdminSurvey/EngagementOverview";
import SurveyForm from "../AdminDashboard/AdminSurvey/SurveyFrom";
import SurveyTable from "../AdminDashboard/AdminSurvey/SurveyTable";

export default function AdminSurvey() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <EngagementOverview />

      {/* Pass handler to SurveyTable */}
      <SurveyTable onCreateNewSurvey={() => setShowForm(true)} />

      {/* Show form only when button is clicked */}
      {showForm && (
        <SurveyForm />
      )}
    </div>
  );
}
