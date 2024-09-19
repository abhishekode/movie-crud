
export type CommonPayload = {
    email: string;
    password: string;
};

export interface LoginPayload extends CommonPayload { }

export interface RegisterPayload extends CommonPayload {
    phone: string;
    name: string;
}
