import { atom } from "jotai";
import { ACCOUNT_FILTER_ALL, PeriodId } from "consts";

export type GranularityId = "daily" | "weekly" | "monthly";

export const linkScriptLoadedAtom = atom(false);

export const datePickerOpenAtom = atom(false);
export const selectedAccountAtom = atom(ACCOUNT_FILTER_ALL);
export const selectedPeriodAtom = atom<PeriodId>("last4w");
export const selectedGranularityAtom = atom<GranularityId>("daily");
export const selectedThresholdAtom = atom<number>(60);
