"use client";
import { useMemo, useState } from "react";

export default function Analyzer() {
  const [purchasePrice, setPurchasePrice] = useState(250000);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [rent, setRent] = useState(2200);
  const [expensesPct, setExpensesPct] = useState(35);

  const metrics = useMemo(() => {
    const dp = purchasePrice * (downPayment/100);
    const loan = purchasePrice - dp;
    const monthlyRate = (interestRate/100)/12;
    const n = 30*12;
    const mortgage = (loan*monthlyRate)/(1-Math.pow(1+monthlyRate, -n));
    const expenses = rent * (expensesPct/100);
    const noi = rent - expenses - mortgage;
    const coc = (noi*12) / dp * 100;
    return { mortgage, expenses, noi, coc };
  }, [purchasePrice, downPayment, interestRate, rent, expensesPct]);

  const Input = ({label, value, set, step=1, suffix=""}) => (
    <label className="block">
      <div className="text-sm text-gray-600">{label}</div>
      <input type="number" value={value} step={step} onChange={e=>set(parseFloat(e.target.value))}
        className="w-full border rounded-xl2 px-3 py-2"/>
      {suffix && <div className="text-xs text-gray-400 mt-1">{suffix}</div>}
    </label>
  );

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="card space-y-3">
        <Input label="Purchase Price ($)" value={purchasePrice} set={setPurchasePrice}/>
        <Input label="Down Payment (%)" value={downPayment} set={setDownPayment}/>
        <Input label="Interest Rate (%)" value={interestRate} set={setInterestRate} step={0.1}/>
        <Input label="Monthly Rent ($)" value={rent} set={setRent}/>
        <Input label="Operating Expenses (%)" value={expensesPct} set={setExpensesPct}/>
      </div>
      <div className="md:col-span-2 card grid md:grid-cols-2 gap-4">
        <div>
          <div className="text-sm text-gray-600">Estimated Mortgage</div>
          <div className="text-3xl font-semibold">${metrics.mortgage.toFixed(0)}/mo</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Operating Expenses</div>
          <div className="text-3xl font-semibold">${metrics.expenses.toFixed(0)}/mo</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Net Monthly Cash Flow</div>
          <div className={`text-3xl font-semibold ${metrics.noi>=0 ? 'text-green-600' : 'text-red-600'}`}>${metrics.noi.toFixed(0)}/mo</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Cash-on-Cash Return</div>
          <div className="text-3xl font-semibold">{isFinite(metrics.coc) ? metrics.coc.toFixed(1) : 0}%</div>
        </div>
      </div>
    </div>
  );
}
