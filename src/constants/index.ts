// ========= files exports ====================
export * from "./ScreensNames"
export * from "./Validation"
export * from "./ImagesPaths"


// ========== constants ===================
import { adjust } from "@utils";

export const MY_COLORS = {
    PRIMARY: '#4E82E8',
    SECONDARY: '#FFC73C',
    TXT_PRIMARY: '#1F1F39',
    TXT_SECONDARY: '#858597',
    TXT_GRAY: '#77777A',
};

export const LAYOUT = {
    SHADOW: { shadowColor: '#000', shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 3, },
    SPACING_SMALL: adjust(10),
    SPACING_MEDIUM: adjust(20),
    SPACING_LARGE: adjust(30),
    SPACING_EXTRA_SMALL: adjust(5),
    BORDER_RADIUS_MEDIUM: adjust(10),
};
