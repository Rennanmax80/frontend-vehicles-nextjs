interface FeedbackProps {
  successMessage?: string;
  errorMessage?: string;
  isSuccess?: boolean;
  isError?: boolean;
  isLoading?: boolean;
}

export default function Feedback({
  successMessage = '',
  errorMessage = '',
  isSuccess = false,
  isError = false,
  isLoading = false,
}: FeedbackProps) {
  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>{errorMessage}</p>;
  if (isSuccess) return <p>{successMessage}</p>;

  return null;
}
