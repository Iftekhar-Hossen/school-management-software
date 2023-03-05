const mongoose = require("mongoose");

const ExpenseRecordSchema = new mongoose.Schema({
    head: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ExpenseHead",
        required: [true, "Expense head is requited"],
    },
    
    totalAmount: {
        type: Number,
        default: 0,
        min: [0, "Amount cant't be less than 0"],
        required: [true, "Total amount is required"],
    },
    totalPaidAmount: {
        type: Number,
        min: [0, "Amount cant't be less than 0"],
        required: [true, "Total amount is required"],
    },
   
    manualReceiptNumber: {
        type: String,
        required: [true, "Manual receipt number is requited"],
    },

    dateOfExpense: {
        type: Date,
        required: [true, "Expense date is required"],
    },
    dateOfPayment: {
        type: Date,
        required: [true, "Payment date is requited"],
    },

    account: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Account is requited"],
    },

    remark: {
        type: String,
    },
    paymentRemark: {
        type: String,
    },

    paymentClear:{
            type: Boolean
    }
});

ExpenseRecordSchema.virtual('isPaymentClear').get(function() {
    return this.totalAmount === this.paidAmount;
});

