import * as vscode from "vscode"; export function activate(context: vscode.ExtensionContext) { console.log("Cursor extension is now active!"); let disposable = vscode.commands.registerCommand("cursor-extension.helloWorld", () => { vscode.window.showInformationMessage("Hello from Cursor Extension!"); }); context.subscriptions.push(disposable); } export function deactivate() {}
