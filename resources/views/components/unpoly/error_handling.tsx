export function ErrorHandling( error_message : string ) {
  return (
    <div class="error-handling">
      <p class="text-red-600 font-medium p-2 rounded bg-red-50 border border-red-200"> {error_message} </p>
    </div>
  );
}