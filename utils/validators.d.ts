import { FormValidator } from '../types';
export declare const VALIDATOR_REQUIRE: {
    type: string;
};
export declare const VALIDATOR_EMAIL: {
    type: string;
};
export declare const VALIDATOR_PHONE_NUMBER: {
    type: string;
};
export declare const VALIDATOR_URL: {
    type: string;
};
export declare const VALIDATOR_EMAIL_PHONE_NUMBER_OR_URL: {
    type: string;
};
export declare const VALIDATOR_ICON: {
    type: string;
};
export declare const validate: <T>(value: T, validators: FormValidator[]) => boolean;
