import { getSettings } from "../getSettings";
const PREFIX = "[Github Tools] ";

export const log = async <T>(value: T) => {
  const { enableDebugLogging } = await getSettings();

  if (!enableDebugLogging) return;

  // log with prefix in color
  console.log(`%c${PREFIX}`, "color: #4CAF50; font-weight: bold;", value);
};
