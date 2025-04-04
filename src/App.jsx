import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  const OptionGroup = ({ title, options, isFreeText }) => (
    <div>
      <p className="font-medium mb-1">{title}</p>
      {isFreeText ? (
        <Input placeholder="Type your answer here..." />
      ) : (
        <RadioGroup>
          {options.map((opt, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <RadioGroupItem id={`${title}-${idx}`} value={opt} />
              <Label htmlFor={`${title}-${idx}`}>{opt}</Label>
            </div>
          ))}
        </RadioGroup>
      )}
    </div>
  );

  if (page === "home") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
        <h1 className="text-3xl font-bold">Welcome to BTC Startup Match</h1>
        <div className="flex gap-4">
          <Button onClick={() => setPage("investor")}>I'm an Investor</Button>
          <Button onClick={() => setPage("founder")}>I'm a Founder</Button>
        </div>
      </div>
    );
  }

  if (page === "investor") {
    const investorFields = [
      { title: "Investment Stage", options: ["Pre-seed", "Seed"] },
      { title: "Preferred Sectors", options: ["Web3", "Bitcoin"] },
      { title: "Investment Amount", options: ["50K–100K USD", "100K–300K USD"] },
      { title: "Years of Experience", options: ["1–3 years", "3–5 years", "5–10 years"] },
      { title: "Base Location", isFreeText: true },
      { title: "Preferred Contact Method", options: ["Email", "Telegram (TG)"] },
    ];

    return (
      <div className="p-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Investor Info</h2>
        <Card className="mb-4">
          <CardContent className="space-y-4 p-4">
            {investorFields.map((field, idx) => (
              <OptionGroup key={idx} {...field} />
            ))}
          </CardContent>
        </Card>
        <Button onClick={() => setPage("investorPreference")}>Submit</Button>
      </div>
    );
  }

  if (page === "founder") {
    const founderFields = [
      { title: "Project Overview + 1-min Video", isFreeText: true },
      { title: "Startup Stage", options: ["Idea", "MVP", "Paying Customers"] },
      { title: "Funding Needed", options: ["50K–100K USD", "100K–300K USD"] },
      { title: "Valuation", options: ["5M–10M USD", "10M–30M USD"] },
      { title: "Funding Round", options: ["Round 1", "Round 2"] },
      { title: "Your Role", options: ["CEO", "CTO", "CMO"] },
      { title: "Startup Experience", options: ["1st time", "2nd time", "3+ times"] },
      { title: "Base Location", isFreeText: true },
      { title: "Preferred Contact Method", options: ["Email", "Telegram (TG)"] },
    ];

    return (
      <div className="p-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Founder Info</h2>
        <Card className="mb-4">
          <CardContent className="space-y-4 p-4">
            {founderFields.map((field, idx) => (
              <OptionGroup key={idx} {...field} />
            ))}
          </CardContent>
        </Card>
        <Button onClick={() => setPage("founderPreference")}>Submit</Button>
      </div>
    );
  }

  if (page === "investorPreference") {
    const preferences = [
      { title: "Startup Stage", options: ["Idea", "MVP", "Paying Customers"] },
      { title: "Valuation Range", options: ["5M–10M USD", "10M–30M USD"] },
      { title: "Funding Needed", options: ["50K–100K USD", "100K–300K USD"] },
      { title: "Industry Sector", options: ["Web3", "Bitcoin"] },
      { title: "Founder Experience Level", options: ["1st time", "2nd time", "3+ times"] },
      { title: "Location Preferences", isFreeText: true },
    ];

    return (
      <div className="p-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Who Are You Looking For?</h2>
        <Card className="mb-4">
          <CardContent className="space-y-4 p-4">
            {preferences.map((field, idx) => (
              <OptionGroup key={idx} {...field} />
            ))}
          </CardContent>
        </Card>
        <Button onClick={() => setPage("matching")}>Submit</Button>
      </div>
    );
  }

  if (page === "founderPreference") {
    const preferences = [
      { title: "Stage of Investor", options: ["Pre-seed", "Seed"] },
      { title: "Typical Check Size", options: ["50K–100K USD", "100K–300K USD"] },
      { title: "Preferred Industry", options: ["Web3", "Bitcoin"] },
      { title: "Location", isFreeText: true },
      { title: "Hands-on vs Hands-off", options: ["Hands-on", "Hands-off"] },
      { title: "Number of Portfolio Companies", options: ["< 10", "10–30", "> 30"] },
    ];

    return (
      <div className="p-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">What Kind of Investor Do You Need?</h2>
        <Card className="mb-4">
          <CardContent className="space-y-4 p-4">
            {preferences.map((field, idx) => (
              <OptionGroup key={idx} {...field} />
            ))}
          </CardContent>
        </Card>
        <Button onClick={() => setPage("matching")}>Submit</Button>
      </div>
    );
  }

  if (page === "matching") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 text-center">
        <h2 className="text-2xl font-bold">Thank You for Your Submission!</h2>
        <p>We’ve received your preferences and will immediately send them to our community manager, Sunny.</p>
        <p>She will reach out to you shortly and match you with the most relevant partner.</p>
        <p className="text-sm text-gray-500 mt-2">(System will also auto-send this information to sunny@btcstartuplab.com)</p>
        <Button onClick={() => setPage("home")} className="mt-6">Back to Home</Button>
      </div>
    );
  }
}
