import VError from "verror";

export class TypescriptActionTemplateError extends VError {
  constructor(
    options: Omit<VError.Options, "name">,
    message: string,
    ...params: unknown[]
  ) {
    super(
      { ...options, name: TypescriptActionTemplateError.name },
      message,
      ...params,
    );
  }
}
