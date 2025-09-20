import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "code-llab.helloWorld",
    () => {
      vscode.window.showInputBox();
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
