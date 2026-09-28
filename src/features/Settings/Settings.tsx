import { type AvailableSettings, useSettings } from "~/api";
import {
  Button,
  FieldInput,
  Fieldset,
  Input,
  Select,
  Toggle,
} from "~/components";
import classes from "./Settings.module.scss";
import * as Yup from "yup";

import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";

const getValidationSchema = (t: any) =>
  Yup.object().shape({
    userGithubUsername: Yup.string().required(
      t("validation.username_required"),
    ),
    userTestLabels: Yup.string().required(t("validation.test_label_required")),
    disableMergeAll: Yup.boolean(),
    disableMergeForNonOwners: Yup.boolean(),
    disableMergeWithFixups: Yup.boolean(),
    copyButtonPrNumbers: Yup.boolean(),
    copyButtonCommitHashes: Yup.boolean(),
    copyButtonRebaseSummaries: Yup.boolean(),
    copyButtonFiles: Yup.boolean(),
    documentTitleMergedPrefix: Yup.string().required(
      t("validation.merged_prefix_required"),
    ),
    documentTitleTestPrefix: Yup.string().required(
      t("validation.test_prefix_required"),
    ),
    documentTitleDraftPrefix: Yup.string().required(
      t("validation.draft_prefix_required"),
    ),
    greyOutDependabot: Yup.boolean(),
    greyOutDrafts: Yup.boolean(),
    showObviousDrafts: Yup.boolean(),
    showAbsoluteTime: Yup.boolean(),
    addActionLinks: Yup.boolean(),
    openInboxPrsInNewTab: Yup.boolean(),
    shortcutCopyCurrentBranch: Yup.string(),
    shortcutCopyPrNumber: Yup.string(),
    enableDebugLogging: Yup.boolean(),
    language: Yup.string().required(t("validation.language_required")),
  });

export const Settings = () => {
  const { value: settings, setValue: setSettings, isLoading } = useSettings();
  const { t } = useTranslation("settings");

  if (isLoading) return <div>{t("loading")}</div>;

  const handleSubmit = (values: AvailableSettings) => {
    setSettings(values);
  };

  return (
    <Formik
      initialValues={settings}
      onSubmit={handleSubmit}
      validationSchema={getValidationSchema(t)}
    >
      <Form>
        <div className={classes.settings}>
          <Fieldset title={t("merge_protection.title")}>
            <FieldInput
              name="userGithubUsername"
              type="text"
              as={Input}
              label={t("merge_protection.username")}
            />

            <FieldInput
              name="disableMergeAll"
              type="checkbox"
              as={Toggle}
              label={t("merge_protection.disable_all")}
            />

            <FieldInput
              name="disableMergeForNonOwners"
              as={Toggle}
              label={t("merge_protection.disable_for_non_owners")}
            />

            <FieldInput
              name="disableMergeWithFixups"
              as={Toggle}
              label={t("merge_protection.disable_with_fixups")}
            />
          </Fieldset>

          <Fieldset title={t("copy_buttons.title")}>
            <FieldInput
              name="copyButtonPrNumbers"
              as={Toggle}
              label={t("copy_buttons.pr_numbers")}
            />

            <FieldInput
              name="copyButtonCommitHashes"
              as={Toggle}
              label={t("copy_buttons.commit_hashes")}
            />

            <FieldInput
              name="copyButtonRebaseSummaries"
              as={Toggle}
              label={t("copy_buttons.rebase_summaries")}
            />

            <FieldInput
              name="copyButtonFiles"
              as={Toggle}
              label={t("copy_buttons.files")}
            />
          </Fieldset>

          <Fieldset title={t("document_title.title")}>
            <FieldInput
              name="userTestLabels"
              type="text"
              as={Input}
              label={t("document_title.test_label")}
              description="PRs with this label will get the test prefix in the document title. Separate multiple labels with a comma."
            />

            <FieldInput
              name="documentTitleMergedPrefix"
              type="text"
              as={Input}
              label={t("document_title.merged_prefix")}
            />

            <FieldInput
              name="documentTitleTestPrefix"
              type="text"
              as={Input}
              label={t("document_title.test_prefix")}
            />

            <FieldInput
              name="documentTitleDraftPrefix"
              type="text"
              as={Input}
              label={t("document_title.draft_prefix")}
            />
          </Fieldset>

          <Fieldset title={t("ui_tweaks.title")}>
            <FieldInput
              name="greyOutDependabot"
              as={Toggle}
              label={t("ui_tweaks.grey_out_dependabot")}
            />

            <FieldInput
              name="greyOutDrafts"
              as={Toggle}
              label={t("ui_tweaks.grey_out_drafts")}
            />

            <FieldInput
              name="showObviousDrafts"
              as={Toggle}
              label={t("ui_tweaks.show_obvious_drafts")}
            />

            <FieldInput
              name="showAbsoluteTime"
              as={Toggle}
              label={t("ui_tweaks.show_absolute_time")}
            />
          </Fieldset>

          <Fieldset title={t("navigation.title")}>
            <FieldInput
              name="addActionLinks"
              as={Toggle}
              label={t("navigation.add_action_links")}
            />

            <FieldInput
              name="openInboxPrsInNewTab"
              as={Toggle}
              label={t("navigation.open_inbox_prs_in_new_tab")}
            />
          </Fieldset>

          <Fieldset title={t("shortcuts.title")}>
            <FieldInput
              name="shortcutCopyCurrentBranch"
              type="text"
              as={Input}
              label={t("shortcuts.copy_current_branch")}
            />

            <FieldInput
              name="shortcutCopyPrNumber"
              type="text"
              as={Input}
              label={t("shortcuts.copy_pr_number")}
            />
          </Fieldset>

          <Fieldset title={t("debug.title")}>
            <FieldInput
              name="enableDebugLogging"
              as={Toggle}
              label={t("debug.enable_debug_logging")}
            />
          </Fieldset>

          <Fieldset title={t("localization.title")}>
            <FieldInput
              name="language"
              type="text"
              as={Select}
              label={t("localization.language")}
              options={[
                { value: "en", label: "English" },
                { value: "nl", label: "Dutch" },
              ]}
            />
          </Fieldset>

          <Button type="submit">{t("save")}</Button>
        </div>
      </Form>
    </Formik>
  );
};
