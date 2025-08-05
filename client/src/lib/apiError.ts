export default function apiError(err: unknown): {
  ok: boolean;
  error: string;
  data: null;
} {
  if (err instanceof Error) {
    return {
      ok: false,
      error: err.message,
      data: null,
    };
  }

  return {
    ok: false,
    error: "Erro desconhecido.",
    data: null,
  };
}
