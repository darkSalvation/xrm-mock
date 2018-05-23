export declare class OrganizationSettingsMock implements Xrm.OrganizationSettings {
    baseCurrencyId: string;
    defaultCountryCode: string;
    isAutoSaveEnabled: boolean;
    languageId: number;
    organizationId: string;
    uniqueName: string;
    useSkypeProtocol: boolean;
    constructor(components: IOrganizationSettingsComponents);
}
export interface IOrganizationSettingsComponents {
    baseCurrencyId?: string;
    defaultCountryCode?: string;
    isAutoSaveEnabled?: boolean;
    languageId?: number;
    organizationId?: string;
    uniqueName?: string;
    useSkypeProtocol?: boolean;
}
