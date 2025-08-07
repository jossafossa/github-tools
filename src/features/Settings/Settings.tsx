import type { JSX } from "preact/jsx-runtime";

import { type AvailableSettings, useSettings } from "@/api";
import { Button, Fieldset, FormControl, Input, Toggle } from "@/components";

import classes from "./Settings.module.scss";

export const Settings = () => {
  const [settings, setSettings] = useSettings();

  const handleSubmit = (event: JSX.TargetedSubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newSettings = {
      copyButtons: {
        commitHashes: formData.get("copyButtons.commitHashes") === "on",
        files: formData.get("copyButtons.files") === "on",
        prNumbers: formData.get("copyButtons.prNumbers") === "on",
        rebaseSummaries: formData.get("copyButtons.rebaseSummaries") === "on",
      },
      debug: {
        showLogs: formData.get("debug.showLogs") === "on",
      },
      disableMerge: {
        hasFixupsToSquash:
          formData.get("disableMerge.hasFixupsToSquash") === "on",
        notOwner: formData.get("disableMerge.notOwner") === "on",
        override: formData.get("disableMerge.override") === "on",
      },
      documentTitle: {
        merged: formData.get("documentTitle.merged") as string,
        test: formData.get("documentTitle.test") as string,
      },
      general: {
        greyOutDependabot: formData.get("general.greyOutDependabot") === "on",
        greyOutDrafts: formData.get("general.greyOutDrafts") === "on",
        obviousDrafts: formData.get("general.obviousDrafts") === "on",
        showAbsoluteTime: formData.get("general.showAbsoluteTime") === "on",
      },
      links: {
        actions: formData.get("links.actions") === "on",
      },
      shortcuts: {
        copyCurrentBranch: formData.get(
          "shortcuts.copyCurrentBranch"
        ) as string,
        copyPrNumber: formData.get("shortcuts.copyPrNumber") as string,
      },
      userSettings: {
        testLabels: formData.get("userSettings.testLabels") as string,
        username: formData.get("userSettings.username") as string,
      },
    } satisfies AvailableSettings;

    setSettings(newSettings);
  };

  return (
    <form class={classes.settings} onSubmit={handleSubmit}>
      <Fieldset title="User settings">
        <FormControl>
          <FormControl.Label>Username</FormControl.Label>

          <Input
            name="userSettings.username"
            type="text"
            value={settings.userSettings.username}
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Test label</FormControl.Label>

          <Input
            name="userSettings.testLabels"
            type="text"
            value={settings.userSettings.testLabels}
          />
        </FormControl>
      </Fieldset>

      <Fieldset title="Disable merge">
        <FormControl>
          <FormControl.Label>Disable all</FormControl.Label>

          <Toggle
            checked={settings.disableMerge.override}
            name="disableMerge.override"
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Disable foreign</FormControl.Label>

          <Toggle
            checked={settings.disableMerge.notOwner}
            name="disableMerge.notOwner"
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Disable when fixups</FormControl.Label>

          <Toggle
            checked={settings.disableMerge.hasFixupsToSquash}
            name="disableMerge.hasFixupsToSquash"
          />
        </FormControl>
      </Fieldset>

      <Fieldset title="Copy buttons">
        <FormControl>
          <FormControl.Label>PR numbers</FormControl.Label>

          <Toggle
            checked={settings.copyButtons.prNumbers}
            name="copyButtons.prNumbers"
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Commit hashes</FormControl.Label>

          <Toggle
            checked={settings.copyButtons.commitHashes}
            name="copyButtons.commitHashes"
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Rebase summaries</FormControl.Label>

          <Toggle
            checked={settings.copyButtons.rebaseSummaries}
            name="copyButtons.rebaseSummaries"
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Files</FormControl.Label>

          <Toggle
            checked={settings.copyButtons.files}
            name="copyButtons.files"
          />
        </FormControl>
      </Fieldset>

      <Fieldset title="Document title">
        <FormControl>
          <FormControl.Label>Merged</FormControl.Label>

          <Input
            name="documentTitle.merged"
            type="text"
            value={settings.documentTitle.merged}
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Test</FormControl.Label>

          <Input
            name="documentTitle.test"
            type="text"
            value={settings.documentTitle.test}
          />
        </FormControl>
      </Fieldset>

      <Fieldset title="General">
        <FormControl>
          <FormControl.Label>Grey out dependabot</FormControl.Label>

          <Toggle
            checked={settings.general.greyOutDependabot}
            name="general.greyOutDependabot"
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Grey out drafts</FormControl.Label>

          <Toggle
            checked={settings.general.greyOutDrafts}
            name="general.greyOutDrafts"
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Obvious drafts</FormControl.Label>

          <Toggle
            checked={settings.general.obviousDrafts}
            name="general.obviousDrafts"
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Show absolute time</FormControl.Label>

          <Toggle
            checked={settings.general.showAbsoluteTime}
            name="general.showAbsoluteTime"
          />
        </FormControl>
      </Fieldset>

      <Fieldset title="Links">
        <FormControl>
          <FormControl.Label>Actions</FormControl.Label>

          <Toggle checked={settings.links.actions} name="links.actions" />
        </FormControl>
      </Fieldset>

      <Fieldset title="Shortcuts">
        <FormControl>
          <FormControl.Label>Copy current branch</FormControl.Label>

          <Input
            name="shortcuts.copyCurrentBranch"
            type="text"
            value={settings.shortcuts.copyCurrentBranch}
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Copy PR number</FormControl.Label>

          <Input
            name="shortcuts.copyPrNumber"
            type="text"
            value={settings.shortcuts.copyPrNumber}
          />
        </FormControl>
      </Fieldset>

      <Fieldset title="Debug">
        <FormControl>
          <FormControl.Label>Show logs</FormControl.Label>

          <Toggle checked={settings.debug.showLogs} name="debug.showLogs" />
        </FormControl>
      </Fieldset>

      <Button>Save</Button>
    </form>
  );
};
