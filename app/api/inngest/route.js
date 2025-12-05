import { inngest } from "@/lib/inngest/client";//C:\Users\raiye\Desktop\Project\ai-finance-platform\lib\inngest\client.js
import { serve } from "inngest/next";

import {
  checkBudgetAlerts,
  generateMonthlyReports,
  processRecurringTransaction,
  triggerRecurringTransactions,
} from "@/lib/inngest/function";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    processRecurringTransaction,
    triggerRecurringTransactions,
    generateMonthlyReports,
    checkBudgetAlerts,
  ],
});

