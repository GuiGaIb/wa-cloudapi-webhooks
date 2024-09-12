import { z } from 'zod';
export declare const changeSchema: z.ZodObject<{
    value: z.ZodObject<{
        contacts: z.ZodDefault<z.ZodArray<z.ZodObject<{
            wa_id: z.ZodString;
            profile: z.ZodObject<{
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
            }, {
                name: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            wa_id: string;
            profile: {
                name: string;
            };
        }, {
            wa_id: string;
            profile: {
                name: string;
            };
        }>, "many">>;
        errors: z.ZodDefault<z.ZodArray<z.ZodObject<{
            code: z.ZodNumber;
            title: z.ZodString;
            message: z.ZodString;
            error_data: z.ZodObject<{
                details: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                details: string;
            }, {
                details: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            code: number;
            message: string;
            title: string;
            error_data: {
                details: string;
            };
        }, {
            code: number;
            message: string;
            title: string;
            error_data: {
                details: string;
            };
        }>, "many">>;
        messages: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<z.objectUtil.extendShape<{
            errors: z.ZodDefault<z.ZodArray<z.ZodObject<{
                code: z.ZodNumber;
                title: z.ZodString;
                message: z.ZodString;
                error_data: z.ZodObject<{
                    details: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    details: string;
                }, {
                    details: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }, {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }>, "many">>;
            from: z.ZodString;
            id: z.ZodString;
            timestamp: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, Date, string>;
        }, {
            type: z.ZodLiteral<"audio">;
            audio: z.ZodObject<{
                id: z.ZodString;
                mime_type: z.ZodEnum<["audio/aac", "audio/amr", "audio/mpeg", "audio/mp4", "audio/ogg"]>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
            }, {
                id: string;
                mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
            }>;
        }>, "strip", z.ZodTypeAny, {
            type: "audio";
            errors: {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }[];
            from: string;
            id: string;
            timestamp: Date;
            audio: {
                id: string;
                mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
            };
        }, {
            type: "audio";
            from: string;
            id: string;
            timestamp: string;
            audio: {
                id: string;
                mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
            };
            errors?: {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }[] | undefined;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            errors: z.ZodDefault<z.ZodArray<z.ZodObject<{
                code: z.ZodNumber;
                title: z.ZodString;
                message: z.ZodString;
                error_data: z.ZodObject<{
                    details: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    details: string;
                }, {
                    details: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }, {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }>, "many">>;
            from: z.ZodString;
            id: z.ZodString;
            timestamp: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, Date, string>;
        }, {
            type: z.ZodLiteral<"image">;
            image: z.ZodObject<{
                id: z.ZodString;
                mime_type: z.ZodEnum<["image/jpeg", "image/png"]>;
                caption: z.ZodOptional<z.ZodString>;
                sha256: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                mime_type: "image/jpeg" | "image/png";
                sha256: string;
                caption?: string | undefined;
            }, {
                id: string;
                mime_type: "image/jpeg" | "image/png";
                sha256: string;
                caption?: string | undefined;
            }>;
        }>, "strip", z.ZodTypeAny, {
            type: "image";
            errors: {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }[];
            from: string;
            id: string;
            timestamp: Date;
            image: {
                id: string;
                mime_type: "image/jpeg" | "image/png";
                sha256: string;
                caption?: string | undefined;
            };
        }, {
            type: "image";
            from: string;
            id: string;
            timestamp: string;
            image: {
                id: string;
                mime_type: "image/jpeg" | "image/png";
                sha256: string;
                caption?: string | undefined;
            };
            errors?: {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }[] | undefined;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            errors: z.ZodDefault<z.ZodArray<z.ZodObject<{
                code: z.ZodNumber;
                title: z.ZodString;
                message: z.ZodString;
                error_data: z.ZodObject<{
                    details: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    details: string;
                }, {
                    details: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }, {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }>, "many">>;
            from: z.ZodString;
            id: z.ZodString;
            timestamp: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, Date, string>;
        }, {
            type: z.ZodLiteral<"text">;
            text: z.ZodObject<{
                body: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                body: string;
            }, {
                body: string;
            }>;
        }>, "strip", z.ZodTypeAny, {
            type: "text";
            errors: {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }[];
            from: string;
            id: string;
            timestamp: Date;
            text: {
                body: string;
            };
        }, {
            type: "text";
            from: string;
            id: string;
            timestamp: string;
            text: {
                body: string;
            };
            errors?: {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }[] | undefined;
        }>]>, "many">>;
        metadata: z.ZodObject<{
            display_phone_number: z.ZodString;
            phone_number_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            display_phone_number: string;
            phone_number_id: string;
        }, {
            display_phone_number: string;
            phone_number_id: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        contacts: {
            wa_id: string;
            profile: {
                name: string;
            };
        }[];
        errors: {
            code: number;
            message: string;
            title: string;
            error_data: {
                details: string;
            };
        }[];
        messages: ({
            type: "audio";
            errors: {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }[];
            from: string;
            id: string;
            timestamp: Date;
            audio: {
                id: string;
                mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
            };
        } | {
            type: "image";
            errors: {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }[];
            from: string;
            id: string;
            timestamp: Date;
            image: {
                id: string;
                mime_type: "image/jpeg" | "image/png";
                sha256: string;
                caption?: string | undefined;
            };
        } | {
            type: "text";
            errors: {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }[];
            from: string;
            id: string;
            timestamp: Date;
            text: {
                body: string;
            };
        })[];
        metadata: {
            display_phone_number: string;
            phone_number_id: string;
        };
    }, {
        metadata: {
            display_phone_number: string;
            phone_number_id: string;
        };
        contacts?: {
            wa_id: string;
            profile: {
                name: string;
            };
        }[] | undefined;
        errors?: {
            code: number;
            message: string;
            title: string;
            error_data: {
                details: string;
            };
        }[] | undefined;
        messages?: ({
            type: "audio";
            from: string;
            id: string;
            timestamp: string;
            audio: {
                id: string;
                mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
            };
            errors?: {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }[] | undefined;
        } | {
            type: "image";
            from: string;
            id: string;
            timestamp: string;
            image: {
                id: string;
                mime_type: "image/jpeg" | "image/png";
                sha256: string;
                caption?: string | undefined;
            };
            errors?: {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }[] | undefined;
        } | {
            type: "text";
            from: string;
            id: string;
            timestamp: string;
            text: {
                body: string;
            };
            errors?: {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }[] | undefined;
        })[] | undefined;
    }>;
    field: z.ZodLiteral<"messages">;
}, "strip", z.ZodTypeAny, {
    value: {
        contacts: {
            wa_id: string;
            profile: {
                name: string;
            };
        }[];
        errors: {
            code: number;
            message: string;
            title: string;
            error_data: {
                details: string;
            };
        }[];
        messages: ({
            type: "audio";
            errors: {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }[];
            from: string;
            id: string;
            timestamp: Date;
            audio: {
                id: string;
                mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
            };
        } | {
            type: "image";
            errors: {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }[];
            from: string;
            id: string;
            timestamp: Date;
            image: {
                id: string;
                mime_type: "image/jpeg" | "image/png";
                sha256: string;
                caption?: string | undefined;
            };
        } | {
            type: "text";
            errors: {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }[];
            from: string;
            id: string;
            timestamp: Date;
            text: {
                body: string;
            };
        })[];
        metadata: {
            display_phone_number: string;
            phone_number_id: string;
        };
    };
    field: "messages";
}, {
    value: {
        metadata: {
            display_phone_number: string;
            phone_number_id: string;
        };
        contacts?: {
            wa_id: string;
            profile: {
                name: string;
            };
        }[] | undefined;
        errors?: {
            code: number;
            message: string;
            title: string;
            error_data: {
                details: string;
            };
        }[] | undefined;
        messages?: ({
            type: "audio";
            from: string;
            id: string;
            timestamp: string;
            audio: {
                id: string;
                mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
            };
            errors?: {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }[] | undefined;
        } | {
            type: "image";
            from: string;
            id: string;
            timestamp: string;
            image: {
                id: string;
                mime_type: "image/jpeg" | "image/png";
                sha256: string;
                caption?: string | undefined;
            };
            errors?: {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }[] | undefined;
        } | {
            type: "text";
            from: string;
            id: string;
            timestamp: string;
            text: {
                body: string;
            };
            errors?: {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }[] | undefined;
        })[] | undefined;
    };
    field: "messages";
}>;
export declare const entrySchema: z.ZodObject<{
    id: z.ZodString;
    changes: z.ZodArray<z.ZodObject<{
        value: z.ZodObject<{
            contacts: z.ZodDefault<z.ZodArray<z.ZodObject<{
                wa_id: z.ZodString;
                profile: z.ZodObject<{
                    name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                }, {
                    name: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                wa_id: string;
                profile: {
                    name: string;
                };
            }, {
                wa_id: string;
                profile: {
                    name: string;
                };
            }>, "many">>;
            errors: z.ZodDefault<z.ZodArray<z.ZodObject<{
                code: z.ZodNumber;
                title: z.ZodString;
                message: z.ZodString;
                error_data: z.ZodObject<{
                    details: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    details: string;
                }, {
                    details: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }, {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }>, "many">>;
            messages: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<z.objectUtil.extendShape<{
                errors: z.ZodDefault<z.ZodArray<z.ZodObject<{
                    code: z.ZodNumber;
                    title: z.ZodString;
                    message: z.ZodString;
                    error_data: z.ZodObject<{
                        details: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        details: string;
                    }, {
                        details: string;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }, {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }>, "many">>;
                from: z.ZodString;
                id: z.ZodString;
                timestamp: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, Date, string>;
            }, {
                type: z.ZodLiteral<"audio">;
                audio: z.ZodObject<{
                    id: z.ZodString;
                    mime_type: z.ZodEnum<["audio/aac", "audio/amr", "audio/mpeg", "audio/mp4", "audio/ogg"]>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
                }, {
                    id: string;
                    mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
                }>;
            }>, "strip", z.ZodTypeAny, {
                type: "audio";
                errors: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[];
                from: string;
                id: string;
                timestamp: Date;
                audio: {
                    id: string;
                    mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
                };
            }, {
                type: "audio";
                from: string;
                id: string;
                timestamp: string;
                audio: {
                    id: string;
                    mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
                };
                errors?: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[] | undefined;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                errors: z.ZodDefault<z.ZodArray<z.ZodObject<{
                    code: z.ZodNumber;
                    title: z.ZodString;
                    message: z.ZodString;
                    error_data: z.ZodObject<{
                        details: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        details: string;
                    }, {
                        details: string;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }, {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }>, "many">>;
                from: z.ZodString;
                id: z.ZodString;
                timestamp: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, Date, string>;
            }, {
                type: z.ZodLiteral<"image">;
                image: z.ZodObject<{
                    id: z.ZodString;
                    mime_type: z.ZodEnum<["image/jpeg", "image/png"]>;
                    caption: z.ZodOptional<z.ZodString>;
                    sha256: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    mime_type: "image/jpeg" | "image/png";
                    sha256: string;
                    caption?: string | undefined;
                }, {
                    id: string;
                    mime_type: "image/jpeg" | "image/png";
                    sha256: string;
                    caption?: string | undefined;
                }>;
            }>, "strip", z.ZodTypeAny, {
                type: "image";
                errors: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[];
                from: string;
                id: string;
                timestamp: Date;
                image: {
                    id: string;
                    mime_type: "image/jpeg" | "image/png";
                    sha256: string;
                    caption?: string | undefined;
                };
            }, {
                type: "image";
                from: string;
                id: string;
                timestamp: string;
                image: {
                    id: string;
                    mime_type: "image/jpeg" | "image/png";
                    sha256: string;
                    caption?: string | undefined;
                };
                errors?: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[] | undefined;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                errors: z.ZodDefault<z.ZodArray<z.ZodObject<{
                    code: z.ZodNumber;
                    title: z.ZodString;
                    message: z.ZodString;
                    error_data: z.ZodObject<{
                        details: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        details: string;
                    }, {
                        details: string;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }, {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }>, "many">>;
                from: z.ZodString;
                id: z.ZodString;
                timestamp: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, Date, string>;
            }, {
                type: z.ZodLiteral<"text">;
                text: z.ZodObject<{
                    body: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    body: string;
                }, {
                    body: string;
                }>;
            }>, "strip", z.ZodTypeAny, {
                type: "text";
                errors: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[];
                from: string;
                id: string;
                timestamp: Date;
                text: {
                    body: string;
                };
            }, {
                type: "text";
                from: string;
                id: string;
                timestamp: string;
                text: {
                    body: string;
                };
                errors?: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[] | undefined;
            }>]>, "many">>;
            metadata: z.ZodObject<{
                display_phone_number: z.ZodString;
                phone_number_id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                display_phone_number: string;
                phone_number_id: string;
            }, {
                display_phone_number: string;
                phone_number_id: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            contacts: {
                wa_id: string;
                profile: {
                    name: string;
                };
            }[];
            errors: {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }[];
            messages: ({
                type: "audio";
                errors: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[];
                from: string;
                id: string;
                timestamp: Date;
                audio: {
                    id: string;
                    mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
                };
            } | {
                type: "image";
                errors: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[];
                from: string;
                id: string;
                timestamp: Date;
                image: {
                    id: string;
                    mime_type: "image/jpeg" | "image/png";
                    sha256: string;
                    caption?: string | undefined;
                };
            } | {
                type: "text";
                errors: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[];
                from: string;
                id: string;
                timestamp: Date;
                text: {
                    body: string;
                };
            })[];
            metadata: {
                display_phone_number: string;
                phone_number_id: string;
            };
        }, {
            metadata: {
                display_phone_number: string;
                phone_number_id: string;
            };
            contacts?: {
                wa_id: string;
                profile: {
                    name: string;
                };
            }[] | undefined;
            errors?: {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }[] | undefined;
            messages?: ({
                type: "audio";
                from: string;
                id: string;
                timestamp: string;
                audio: {
                    id: string;
                    mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
                };
                errors?: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[] | undefined;
            } | {
                type: "image";
                from: string;
                id: string;
                timestamp: string;
                image: {
                    id: string;
                    mime_type: "image/jpeg" | "image/png";
                    sha256: string;
                    caption?: string | undefined;
                };
                errors?: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[] | undefined;
            } | {
                type: "text";
                from: string;
                id: string;
                timestamp: string;
                text: {
                    body: string;
                };
                errors?: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[] | undefined;
            })[] | undefined;
        }>;
        field: z.ZodLiteral<"messages">;
    }, "strip", z.ZodTypeAny, {
        value: {
            contacts: {
                wa_id: string;
                profile: {
                    name: string;
                };
            }[];
            errors: {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }[];
            messages: ({
                type: "audio";
                errors: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[];
                from: string;
                id: string;
                timestamp: Date;
                audio: {
                    id: string;
                    mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
                };
            } | {
                type: "image";
                errors: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[];
                from: string;
                id: string;
                timestamp: Date;
                image: {
                    id: string;
                    mime_type: "image/jpeg" | "image/png";
                    sha256: string;
                    caption?: string | undefined;
                };
            } | {
                type: "text";
                errors: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[];
                from: string;
                id: string;
                timestamp: Date;
                text: {
                    body: string;
                };
            })[];
            metadata: {
                display_phone_number: string;
                phone_number_id: string;
            };
        };
        field: "messages";
    }, {
        value: {
            metadata: {
                display_phone_number: string;
                phone_number_id: string;
            };
            contacts?: {
                wa_id: string;
                profile: {
                    name: string;
                };
            }[] | undefined;
            errors?: {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }[] | undefined;
            messages?: ({
                type: "audio";
                from: string;
                id: string;
                timestamp: string;
                audio: {
                    id: string;
                    mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
                };
                errors?: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[] | undefined;
            } | {
                type: "image";
                from: string;
                id: string;
                timestamp: string;
                image: {
                    id: string;
                    mime_type: "image/jpeg" | "image/png";
                    sha256: string;
                    caption?: string | undefined;
                };
                errors?: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[] | undefined;
            } | {
                type: "text";
                from: string;
                id: string;
                timestamp: string;
                text: {
                    body: string;
                };
                errors?: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[] | undefined;
            })[] | undefined;
        };
        field: "messages";
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: string;
    changes: {
        value: {
            contacts: {
                wa_id: string;
                profile: {
                    name: string;
                };
            }[];
            errors: {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }[];
            messages: ({
                type: "audio";
                errors: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[];
                from: string;
                id: string;
                timestamp: Date;
                audio: {
                    id: string;
                    mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
                };
            } | {
                type: "image";
                errors: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[];
                from: string;
                id: string;
                timestamp: Date;
                image: {
                    id: string;
                    mime_type: "image/jpeg" | "image/png";
                    sha256: string;
                    caption?: string | undefined;
                };
            } | {
                type: "text";
                errors: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[];
                from: string;
                id: string;
                timestamp: Date;
                text: {
                    body: string;
                };
            })[];
            metadata: {
                display_phone_number: string;
                phone_number_id: string;
            };
        };
        field: "messages";
    }[];
}, {
    id: string;
    changes: {
        value: {
            metadata: {
                display_phone_number: string;
                phone_number_id: string;
            };
            contacts?: {
                wa_id: string;
                profile: {
                    name: string;
                };
            }[] | undefined;
            errors?: {
                code: number;
                message: string;
                title: string;
                error_data: {
                    details: string;
                };
            }[] | undefined;
            messages?: ({
                type: "audio";
                from: string;
                id: string;
                timestamp: string;
                audio: {
                    id: string;
                    mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
                };
                errors?: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[] | undefined;
            } | {
                type: "image";
                from: string;
                id: string;
                timestamp: string;
                image: {
                    id: string;
                    mime_type: "image/jpeg" | "image/png";
                    sha256: string;
                    caption?: string | undefined;
                };
                errors?: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[] | undefined;
            } | {
                type: "text";
                from: string;
                id: string;
                timestamp: string;
                text: {
                    body: string;
                };
                errors?: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[] | undefined;
            })[] | undefined;
        };
        field: "messages";
    }[];
}>;
export declare const notificationPayloadSchema: z.ZodObject<{
    object: z.ZodLiteral<"whatsapp_business_account">;
    entry: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        changes: z.ZodArray<z.ZodObject<{
            value: z.ZodObject<{
                contacts: z.ZodDefault<z.ZodArray<z.ZodObject<{
                    wa_id: z.ZodString;
                    profile: z.ZodObject<{
                        name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                    }, {
                        name: string;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    wa_id: string;
                    profile: {
                        name: string;
                    };
                }, {
                    wa_id: string;
                    profile: {
                        name: string;
                    };
                }>, "many">>;
                errors: z.ZodDefault<z.ZodArray<z.ZodObject<{
                    code: z.ZodNumber;
                    title: z.ZodString;
                    message: z.ZodString;
                    error_data: z.ZodObject<{
                        details: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        details: string;
                    }, {
                        details: string;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }, {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }>, "many">>;
                messages: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<z.objectUtil.extendShape<{
                    errors: z.ZodDefault<z.ZodArray<z.ZodObject<{
                        code: z.ZodNumber;
                        title: z.ZodString;
                        message: z.ZodString;
                        error_data: z.ZodObject<{
                            details: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            details: string;
                        }, {
                            details: string;
                        }>;
                    }, "strip", z.ZodTypeAny, {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }, {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }>, "many">>;
                    from: z.ZodString;
                    id: z.ZodString;
                    timestamp: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, Date, string>;
                }, {
                    type: z.ZodLiteral<"audio">;
                    audio: z.ZodObject<{
                        id: z.ZodString;
                        mime_type: z.ZodEnum<["audio/aac", "audio/amr", "audio/mpeg", "audio/mp4", "audio/ogg"]>;
                    }, "strip", z.ZodTypeAny, {
                        id: string;
                        mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
                    }, {
                        id: string;
                        mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
                    }>;
                }>, "strip", z.ZodTypeAny, {
                    type: "audio";
                    errors: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[];
                    from: string;
                    id: string;
                    timestamp: Date;
                    audio: {
                        id: string;
                        mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
                    };
                }, {
                    type: "audio";
                    from: string;
                    id: string;
                    timestamp: string;
                    audio: {
                        id: string;
                        mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
                    };
                    errors?: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[] | undefined;
                }>, z.ZodObject<z.objectUtil.extendShape<{
                    errors: z.ZodDefault<z.ZodArray<z.ZodObject<{
                        code: z.ZodNumber;
                        title: z.ZodString;
                        message: z.ZodString;
                        error_data: z.ZodObject<{
                            details: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            details: string;
                        }, {
                            details: string;
                        }>;
                    }, "strip", z.ZodTypeAny, {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }, {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }>, "many">>;
                    from: z.ZodString;
                    id: z.ZodString;
                    timestamp: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, Date, string>;
                }, {
                    type: z.ZodLiteral<"image">;
                    image: z.ZodObject<{
                        id: z.ZodString;
                        mime_type: z.ZodEnum<["image/jpeg", "image/png"]>;
                        caption: z.ZodOptional<z.ZodString>;
                        sha256: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        id: string;
                        mime_type: "image/jpeg" | "image/png";
                        sha256: string;
                        caption?: string | undefined;
                    }, {
                        id: string;
                        mime_type: "image/jpeg" | "image/png";
                        sha256: string;
                        caption?: string | undefined;
                    }>;
                }>, "strip", z.ZodTypeAny, {
                    type: "image";
                    errors: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[];
                    from: string;
                    id: string;
                    timestamp: Date;
                    image: {
                        id: string;
                        mime_type: "image/jpeg" | "image/png";
                        sha256: string;
                        caption?: string | undefined;
                    };
                }, {
                    type: "image";
                    from: string;
                    id: string;
                    timestamp: string;
                    image: {
                        id: string;
                        mime_type: "image/jpeg" | "image/png";
                        sha256: string;
                        caption?: string | undefined;
                    };
                    errors?: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[] | undefined;
                }>, z.ZodObject<z.objectUtil.extendShape<{
                    errors: z.ZodDefault<z.ZodArray<z.ZodObject<{
                        code: z.ZodNumber;
                        title: z.ZodString;
                        message: z.ZodString;
                        error_data: z.ZodObject<{
                            details: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            details: string;
                        }, {
                            details: string;
                        }>;
                    }, "strip", z.ZodTypeAny, {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }, {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }>, "many">>;
                    from: z.ZodString;
                    id: z.ZodString;
                    timestamp: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, Date, string>;
                }, {
                    type: z.ZodLiteral<"text">;
                    text: z.ZodObject<{
                        body: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        body: string;
                    }, {
                        body: string;
                    }>;
                }>, "strip", z.ZodTypeAny, {
                    type: "text";
                    errors: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[];
                    from: string;
                    id: string;
                    timestamp: Date;
                    text: {
                        body: string;
                    };
                }, {
                    type: "text";
                    from: string;
                    id: string;
                    timestamp: string;
                    text: {
                        body: string;
                    };
                    errors?: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[] | undefined;
                }>]>, "many">>;
                metadata: z.ZodObject<{
                    display_phone_number: z.ZodString;
                    phone_number_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    display_phone_number: string;
                    phone_number_id: string;
                }, {
                    display_phone_number: string;
                    phone_number_id: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                contacts: {
                    wa_id: string;
                    profile: {
                        name: string;
                    };
                }[];
                errors: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[];
                messages: ({
                    type: "audio";
                    errors: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[];
                    from: string;
                    id: string;
                    timestamp: Date;
                    audio: {
                        id: string;
                        mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
                    };
                } | {
                    type: "image";
                    errors: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[];
                    from: string;
                    id: string;
                    timestamp: Date;
                    image: {
                        id: string;
                        mime_type: "image/jpeg" | "image/png";
                        sha256: string;
                        caption?: string | undefined;
                    };
                } | {
                    type: "text";
                    errors: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[];
                    from: string;
                    id: string;
                    timestamp: Date;
                    text: {
                        body: string;
                    };
                })[];
                metadata: {
                    display_phone_number: string;
                    phone_number_id: string;
                };
            }, {
                metadata: {
                    display_phone_number: string;
                    phone_number_id: string;
                };
                contacts?: {
                    wa_id: string;
                    profile: {
                        name: string;
                    };
                }[] | undefined;
                errors?: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[] | undefined;
                messages?: ({
                    type: "audio";
                    from: string;
                    id: string;
                    timestamp: string;
                    audio: {
                        id: string;
                        mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
                    };
                    errors?: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[] | undefined;
                } | {
                    type: "image";
                    from: string;
                    id: string;
                    timestamp: string;
                    image: {
                        id: string;
                        mime_type: "image/jpeg" | "image/png";
                        sha256: string;
                        caption?: string | undefined;
                    };
                    errors?: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[] | undefined;
                } | {
                    type: "text";
                    from: string;
                    id: string;
                    timestamp: string;
                    text: {
                        body: string;
                    };
                    errors?: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[] | undefined;
                })[] | undefined;
            }>;
            field: z.ZodLiteral<"messages">;
        }, "strip", z.ZodTypeAny, {
            value: {
                contacts: {
                    wa_id: string;
                    profile: {
                        name: string;
                    };
                }[];
                errors: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[];
                messages: ({
                    type: "audio";
                    errors: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[];
                    from: string;
                    id: string;
                    timestamp: Date;
                    audio: {
                        id: string;
                        mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
                    };
                } | {
                    type: "image";
                    errors: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[];
                    from: string;
                    id: string;
                    timestamp: Date;
                    image: {
                        id: string;
                        mime_type: "image/jpeg" | "image/png";
                        sha256: string;
                        caption?: string | undefined;
                    };
                } | {
                    type: "text";
                    errors: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[];
                    from: string;
                    id: string;
                    timestamp: Date;
                    text: {
                        body: string;
                    };
                })[];
                metadata: {
                    display_phone_number: string;
                    phone_number_id: string;
                };
            };
            field: "messages";
        }, {
            value: {
                metadata: {
                    display_phone_number: string;
                    phone_number_id: string;
                };
                contacts?: {
                    wa_id: string;
                    profile: {
                        name: string;
                    };
                }[] | undefined;
                errors?: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[] | undefined;
                messages?: ({
                    type: "audio";
                    from: string;
                    id: string;
                    timestamp: string;
                    audio: {
                        id: string;
                        mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
                    };
                    errors?: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[] | undefined;
                } | {
                    type: "image";
                    from: string;
                    id: string;
                    timestamp: string;
                    image: {
                        id: string;
                        mime_type: "image/jpeg" | "image/png";
                        sha256: string;
                        caption?: string | undefined;
                    };
                    errors?: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[] | undefined;
                } | {
                    type: "text";
                    from: string;
                    id: string;
                    timestamp: string;
                    text: {
                        body: string;
                    };
                    errors?: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[] | undefined;
                })[] | undefined;
            };
            field: "messages";
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        changes: {
            value: {
                contacts: {
                    wa_id: string;
                    profile: {
                        name: string;
                    };
                }[];
                errors: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[];
                messages: ({
                    type: "audio";
                    errors: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[];
                    from: string;
                    id: string;
                    timestamp: Date;
                    audio: {
                        id: string;
                        mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
                    };
                } | {
                    type: "image";
                    errors: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[];
                    from: string;
                    id: string;
                    timestamp: Date;
                    image: {
                        id: string;
                        mime_type: "image/jpeg" | "image/png";
                        sha256: string;
                        caption?: string | undefined;
                    };
                } | {
                    type: "text";
                    errors: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[];
                    from: string;
                    id: string;
                    timestamp: Date;
                    text: {
                        body: string;
                    };
                })[];
                metadata: {
                    display_phone_number: string;
                    phone_number_id: string;
                };
            };
            field: "messages";
        }[];
    }, {
        id: string;
        changes: {
            value: {
                metadata: {
                    display_phone_number: string;
                    phone_number_id: string;
                };
                contacts?: {
                    wa_id: string;
                    profile: {
                        name: string;
                    };
                }[] | undefined;
                errors?: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[] | undefined;
                messages?: ({
                    type: "audio";
                    from: string;
                    id: string;
                    timestamp: string;
                    audio: {
                        id: string;
                        mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
                    };
                    errors?: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[] | undefined;
                } | {
                    type: "image";
                    from: string;
                    id: string;
                    timestamp: string;
                    image: {
                        id: string;
                        mime_type: "image/jpeg" | "image/png";
                        sha256: string;
                        caption?: string | undefined;
                    };
                    errors?: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[] | undefined;
                } | {
                    type: "text";
                    from: string;
                    id: string;
                    timestamp: string;
                    text: {
                        body: string;
                    };
                    errors?: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[] | undefined;
                })[] | undefined;
            };
            field: "messages";
        }[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    object: "whatsapp_business_account";
    entry: {
        id: string;
        changes: {
            value: {
                contacts: {
                    wa_id: string;
                    profile: {
                        name: string;
                    };
                }[];
                errors: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[];
                messages: ({
                    type: "audio";
                    errors: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[];
                    from: string;
                    id: string;
                    timestamp: Date;
                    audio: {
                        id: string;
                        mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
                    };
                } | {
                    type: "image";
                    errors: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[];
                    from: string;
                    id: string;
                    timestamp: Date;
                    image: {
                        id: string;
                        mime_type: "image/jpeg" | "image/png";
                        sha256: string;
                        caption?: string | undefined;
                    };
                } | {
                    type: "text";
                    errors: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[];
                    from: string;
                    id: string;
                    timestamp: Date;
                    text: {
                        body: string;
                    };
                })[];
                metadata: {
                    display_phone_number: string;
                    phone_number_id: string;
                };
            };
            field: "messages";
        }[];
    }[];
}, {
    object: "whatsapp_business_account";
    entry: {
        id: string;
        changes: {
            value: {
                metadata: {
                    display_phone_number: string;
                    phone_number_id: string;
                };
                contacts?: {
                    wa_id: string;
                    profile: {
                        name: string;
                    };
                }[] | undefined;
                errors?: {
                    code: number;
                    message: string;
                    title: string;
                    error_data: {
                        details: string;
                    };
                }[] | undefined;
                messages?: ({
                    type: "audio";
                    from: string;
                    id: string;
                    timestamp: string;
                    audio: {
                        id: string;
                        mime_type: "audio/aac" | "audio/amr" | "audio/mpeg" | "audio/mp4" | "audio/ogg";
                    };
                    errors?: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[] | undefined;
                } | {
                    type: "image";
                    from: string;
                    id: string;
                    timestamp: string;
                    image: {
                        id: string;
                        mime_type: "image/jpeg" | "image/png";
                        sha256: string;
                        caption?: string | undefined;
                    };
                    errors?: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[] | undefined;
                } | {
                    type: "text";
                    from: string;
                    id: string;
                    timestamp: string;
                    text: {
                        body: string;
                    };
                    errors?: {
                        code: number;
                        message: string;
                        title: string;
                        error_data: {
                            details: string;
                        };
                    }[] | undefined;
                })[] | undefined;
            };
            field: "messages";
        }[];
    }[];
}>;
export type NotificationPayload = z.infer<typeof notificationPayloadSchema>;
export type PayloadEntry = z.infer<typeof entrySchema>;
export type EntryChange = z.infer<typeof changeSchema>;
