const cx = (...names: Array<string | false | null | undefined>) => names.filter(Boolean).join(" ");

export default cx;
