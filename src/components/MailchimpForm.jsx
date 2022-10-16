import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

export default function App() {

    const data = {
        "url": import.meta.env.PUBLIC_MAILCHIMP_POST_URL,
        "u_key": import.meta.env.PUBLIC_MAILCHIMP_U,
        "id_key": import.meta.env.PUBLIC_MAILCHIMP_ID
    }
    
    const url = `${data.url}?u=${data.u_key}&amp;id=${data.id_key}`;

    const {
        loading,
        error,
        success,
        message,
        handleSubmit
    } = useMailChimpForm(url);
    const { fields, handleFieldChange } = useFormFields({
        EMAIL: "",
    });
    return (
        <>
            <form
                onSubmit={event => {
                    event.preventDefault();
                    handleSubmit(fields);
                }}
            >
                <div className="mt-6 flex">
                    <input
                        id="EMAIL"
                        type="email"
                        value={fields.EMAIL}
                        onChange={handleFieldChange}
                        placeholder="Correo electrónico"
                        className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-violet-400 dark:focus:ring-teal-400/10 sm:text-sm"
                    />
                    <button
                        className="inline-flex items-center gap-2 justify-center rounded-lg py-2 px-4 text-sm font-medium active:text-slate-400 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 transition dark:highlight-white/5 bg-zinc-800 text-zinc-100 hover:bg-zinc-700 ml-4 flex-none"
                    >
                        Avísame
                    </button>
                </div>
                <div className="flex items-center mt-3">
                    <div className="flex h-5 items-center">
                        <input required id="comments" name="comments" type="checkbox" className="w-4 h-4 text-violet-600 bg-gray-100 rounded border-gray-300 focus:ring-violet-500 dark:focus:ring-violet-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="comments" className="mt-4 text-xs text-zinc-600 dark:text-zinc-400">Acepto y confirmo haber leído la <a href="#" className="text-violet-500 dark:text-violet-400">política de privacidad</a></label>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="text-sm">
                        <span className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                            {loading && "Enviando..."}
                            {error && message}
                            {success && message}
                        </span>
                    </div>
                </div>
            </form>
        </>
    );
}
