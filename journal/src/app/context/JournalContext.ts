import React from "react";
import type { JournalContextType } from "../types/types";

const JournalContext = React.createContext<JournalContextType | undefined>(undefined);

export default JournalContext;