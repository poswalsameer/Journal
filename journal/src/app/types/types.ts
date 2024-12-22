export interface Journal {
    id: string;
    title: string;
    content: string;
}

export interface JournalContextType {
    allJournals: Journal[];
    setAllJournals: React.Dispatch<React.SetStateAction<Journal[]>>;
    currentJournal: Journal;
    setCurrentJournal: React.Dispatch<React.SetStateAction<Journal>>;
}
