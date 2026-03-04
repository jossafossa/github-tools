import type { JSX } from "preact/jsx-runtime";

import { type AvailableSettings, useSettings } from "~/api";
import { Button, Fieldset, FormControl, Input, Toggle } from "~/components";

import classes from "./Settings.module.scss";

export const Settings = () => {
  const [settings, setSettings] = useSettings();

  const handleSubmit = (event: JSX.TargetedSubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newSettings: AvailableSettings = {
      // Copy features
      copyButtonCommitHashes: formData.get("copyButtonCommitHashes") === "on",
      copyButtonFiles: formData.get("copyButtonFiles") === "on",
      copyButtonPrNumbers: formData.get("copyButtonPrNumbers") === "on",
      copyButtonRebaseSummaries: formData.get("copyButtonRebaseSummaries") === "on",
      
      // UI tweaks
      greyOutDependabot: formData.get("greyOutDependabot") === "on",
      greyOutDrafts: formData.get("greyOutDrafts") === "on",
      showObviousDrafts: formData.get("showObviousDrafts") === "on",
      showAbsoluteTime: formData.get("showAbsoluteTime") === "on",
      
      // Document titles
      documentTitleMergedPrefix: formData.get("documentTitleMergedPrefix") as string,
      documentTitleTestPrefix: formData.get("documentTitleTestPrefix") as string,
      
      // Merge protection
      disableMergeAll: formData.get("disableMergeAll") === "on",
      disableMergeForNonOwners: formData.get("disableMergeForNonOwners") === "on",
      disableMergeWithFixups: formData.get("disableMergeWithFixups") === "on",
      
      // Navigation
      addActionLinks: formData.get("addActionLinks") === "on",
      
      // Shortcuts
      shortcutCopyCurrentBranch: formData.get("shortcutCopyCurrentBranch") as string,
      shortcutCopyPrNumber: formData.get("shortcutCopyPrNumber") as string,
      
      // Debug
      enableDebugLogging: formData.get("enableDebugLogging") === "on",
      
      // User
      userGithubUsername: formData.get("userGithubUsername") as string,
      userTestLabels: formData.get("userTestLabels") as string,
    };

    setSettings(newSettings);
  };

  return (
    <form class={classes.settings} onSubmit={handleSubmit}>
      <Fieldset title="User settings">
        <FormControl>
          <FormControl.Label>Username</FormControl.Label>

          <Input
            name="userGithubUsername"
            type="text"
            value={settings.userGithubUsername}
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Test label</FormControl.Label>

          <Input
            name="userTestLabels" 
            type="text"
            value={settings.userTestLabels}
          />
        </FormControl>
      </Fieldset>

      <Fieldset title="Merge protection">
        <FormControl>
          <FormControl.Label>Disable all</FormControl.Label>

          <Toggle
            checked={settings.disableMergeAll}
            name="disableMergeAll"
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Disable for non-owners</FormControl.Label>

          <Toggle
            checked={settings.disableMergeForNonOwners}
            name="disableMergeForNonOwners"
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Disable with fixups</FormControl.Label>

          <Toggle
            checked={settings.disableMergeWithFixups}
            name="disableMergeWithFixups"
          />
        </FormControl>
      </Fieldset>

      <Fieldset title="Copy buttons">
        <FormControl>
          <FormControl.Label>PR numbers</FormControl.Label>

          <Toggle
            checked={settings.copyButtonPrNumbers}
            name="copyButtonPrNumbers"
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Commit hashes</FormControl.Label>

          <Toggle
            checked={settings.copyButtonCommitHashes}
            name="copyButtonCommitHashes"
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Rebase summaries</FormControl.Label>

          <Toggle
            checked={settings.copyButtonRebaseSummaries}
            name="copyButtonRebaseSummaries"
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Files</FormControl.Label>

          <Toggle
            checked={settings.copyButtonFiles}
            name="copyButtonFiles"
          />
        </FormControl>
      </Fieldset>

      <Fieldset title="Document title">
        <FormControl>
          <FormControl.Label>Merged prefix</FormControl.Label>

          <Input
            name="documentTitleMergedPrefix"
            type="text"
            value={settings.documentTitleMergedPrefix}
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Test prefix</FormControl.Label>

          <Input
            name="documentTitleTestPrefix"
            type="text"
            value={settings.documentTitleTestPrefix}
          />
        </FormControl>
      </Fieldset>

      <Fieldset title="UI Tweaks">
        <FormControl>
          <FormControl.Label>Grey out dependabot</FormControl.Label>

          <Toggle
            checked={settings.greyOutDependabot}
            name="greyOutDependabot"
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Grey out drafts</FormControl.Label>

          <Toggle
            checked={settings.greyOutDrafts}
            name="greyOutDrafts"
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Show obvious drafts</FormControl.Label>

          <Toggle
            checked={settings.showObviousDrafts}
            name="showObviousDrafts"
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Show absolute time</FormControl.Label>

          <Toggle
            checked={settings.showAbsoluteTime}
            name="showAbsoluteTime"
          />
        </FormControl>
      </Fieldset>

      <Fieldset title="Navigation">
        <FormControl>
          <FormControl.Label>Add action links</FormControl.Label>

          <Toggle checked={settings.addActionLinks} name="addActionLinks" />
        </FormControl>
      </Fieldset>

      <Fieldset title="Shortcuts">
        <FormControl>
          <FormControl.Label>Copy current branch</FormControl.Label>

          <Input
            name="shortcutCopyCurrentBranch"
            type="text"
            value={settings.shortcutCopyCurrentBranch}
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Copy PR number</FormControl.Label>

          <Input
            name="shortcutCopyPrNumber"
            type="text"
            value={settings.shortcutCopyPrNumber}
          />
        </FormControl>
      </Fieldset>

      <Fieldset title="Debug">
        <FormControl>
          <FormControl.Label>Enable debug logging</FormControl.Label>

          <Toggle checked={settings.enableDebugLogging} name="enableDebugLogging" />
        </FormControl>
      </Fieldset>

      <Button>Save</Button>
    </form>
  );
};
