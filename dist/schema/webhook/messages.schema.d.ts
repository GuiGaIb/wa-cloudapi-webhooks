import { z } from 'zod';
export declare const SUPPORTD_MESSAGE_TYPES: readonly ["audio", "image", "text"];
export declare const SUPPORTED_MIME_TYPES: {
    readonly audio: readonly ["audio/aac", "audio/amr", "audio/mpeg", "audio/mp4", "audio/ogg"];
    readonly image: readonly ["image/jpeg", "image/png"];
    readonly text: readonly [];
};
export declare const messageErrorSchema: z.ZodObject<{
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
    title: string;
    message: string;
    error_data: {
        details: string;
    };
}, {
    code: number;
    title: string;
    message: string;
    error_data: {
        details: string;
    };
}>;
export declare const baseMessageSchema: z.ZodObject<{
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
        title: string;
        message: string;
        error_data: {
            details: string;
        };
    }, {
        code: number;
        title: string;
        message: string;
        error_data: {
            details: string;
        };
    }>, "many">>;
    from: z.ZodString;
    id: z.ZodString;
    timestamp: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, Date, string>;
}, "strip", z.ZodTypeAny, {
    errors: {
        code: number;
        title: string;
        message: string;
        error_data: {
            details: string;
        };
    }[];
    from: string;
    id: string;
    timestamp: Date;
}, {
    from: string;
    id: string;
    timestamp: string;
    errors?: {
        code: number;
        title: string;
        message: string;
        error_data: {
            details: string;
        };
    }[] | undefined;
}>;
export declare const audioMessageSchema: z.ZodObject<z.objectUtil.extendShape<{
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
        title: string;
        message: string;
        error_data: {
            details: string;
        };
    }, {
        code: number;
        title: string;
        message: string;
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
        mime_type: z.ZodEffects<z.ZodString, any, string>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        mime_type?: any;
    }, {
        id: string;
        mime_type: string;
    }>;
}>, "strip", z.ZodTypeAny, {
    audio: {
        id: string;
        mime_type?: any;
    };
    type: "audio";
    errors: {
        code: number;
        title: string;
        message: string;
        error_data: {
            details: string;
        };
    }[];
    from: string;
    id: string;
    timestamp: Date;
}, {
    audio: {
        id: string;
        mime_type: string;
    };
    type: "audio";
    from: string;
    id: string;
    timestamp: string;
    errors?: {
        code: number;
        title: string;
        message: string;
        error_data: {
            details: string;
        };
    }[] | undefined;
}>;
export declare const textMessageSchema: z.ZodObject<z.objectUtil.extendShape<{
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
        title: string;
        message: string;
        error_data: {
            details: string;
        };
    }, {
        code: number;
        title: string;
        message: string;
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
    text: {
        body: string;
    };
    type: "text";
    errors: {
        code: number;
        title: string;
        message: string;
        error_data: {
            details: string;
        };
    }[];
    from: string;
    id: string;
    timestamp: Date;
}, {
    text: {
        body: string;
    };
    type: "text";
    from: string;
    id: string;
    timestamp: string;
    errors?: {
        code: number;
        title: string;
        message: string;
        error_data: {
            details: string;
        };
    }[] | undefined;
}>;
export declare const imageMessageSchema: z.ZodObject<z.objectUtil.extendShape<{
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
        title: string;
        message: string;
        error_data: {
            details: string;
        };
    }, {
        code: number;
        title: string;
        message: string;
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
    image: {
        id: string;
        mime_type: "image/jpeg" | "image/png";
        sha256: string;
        caption?: string | undefined;
    };
    type: "image";
    errors: {
        code: number;
        title: string;
        message: string;
        error_data: {
            details: string;
        };
    }[];
    from: string;
    id: string;
    timestamp: Date;
}, {
    image: {
        id: string;
        mime_type: "image/jpeg" | "image/png";
        sha256: string;
        caption?: string | undefined;
    };
    type: "image";
    from: string;
    id: string;
    timestamp: string;
    errors?: {
        code: number;
        title: string;
        message: string;
        error_data: {
            details: string;
        };
    }[] | undefined;
}>;
export declare const messageSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<z.objectUtil.extendShape<{
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
        title: string;
        message: string;
        error_data: {
            details: string;
        };
    }, {
        code: number;
        title: string;
        message: string;
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
        mime_type: z.ZodEffects<z.ZodString, any, string>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        mime_type?: any;
    }, {
        id: string;
        mime_type: string;
    }>;
}>, "strip", z.ZodTypeAny, {
    audio: {
        id: string;
        mime_type?: any;
    };
    type: "audio";
    errors: {
        code: number;
        title: string;
        message: string;
        error_data: {
            details: string;
        };
    }[];
    from: string;
    id: string;
    timestamp: Date;
}, {
    audio: {
        id: string;
        mime_type: string;
    };
    type: "audio";
    from: string;
    id: string;
    timestamp: string;
    errors?: {
        code: number;
        title: string;
        message: string;
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
        title: string;
        message: string;
        error_data: {
            details: string;
        };
    }, {
        code: number;
        title: string;
        message: string;
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
    image: {
        id: string;
        mime_type: "image/jpeg" | "image/png";
        sha256: string;
        caption?: string | undefined;
    };
    type: "image";
    errors: {
        code: number;
        title: string;
        message: string;
        error_data: {
            details: string;
        };
    }[];
    from: string;
    id: string;
    timestamp: Date;
}, {
    image: {
        id: string;
        mime_type: "image/jpeg" | "image/png";
        sha256: string;
        caption?: string | undefined;
    };
    type: "image";
    from: string;
    id: string;
    timestamp: string;
    errors?: {
        code: number;
        title: string;
        message: string;
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
        title: string;
        message: string;
        error_data: {
            details: string;
        };
    }, {
        code: number;
        title: string;
        message: string;
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
    text: {
        body: string;
    };
    type: "text";
    errors: {
        code: number;
        title: string;
        message: string;
        error_data: {
            details: string;
        };
    }[];
    from: string;
    id: string;
    timestamp: Date;
}, {
    text: {
        body: string;
    };
    type: "text";
    from: string;
    id: string;
    timestamp: string;
    errors?: {
        code: number;
        title: string;
        message: string;
        error_data: {
            details: string;
        };
    }[] | undefined;
}>]>;
export type Message = z.infer<typeof messageSchema>;
export type AudioMessage = z.infer<typeof audioMessageSchema>;
export type ImageMessage = z.infer<typeof imageMessageSchema>;
export type TextMessage = z.infer<typeof textMessageSchema>;
export type SupportedMessageType = (typeof SUPPORTD_MESSAGE_TYPES)[number];
