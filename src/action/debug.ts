import { ActionType } from './base'
import deps from '../deps'

export class DebugAction extends deps.ActionBase.ActionBase {
  public type: ActionType = 'debug'

  _start() {
    const task = this.task
    if (!task) return
    this._write(task.status ? `${task.action}... ${task.status}\n` : `${task.action}...\n`)
  }

  _pause() {}
  _resume() {}

  _updateStatus(status: string, prevStatus?: string, newline: boolean = false) {
    const task = this.task
    if (!task) return
    this._write(`${task.action}... ${status}\n`)
  }

  _stop(status: string) {
    const task = this.task
    if (!task) return
    this._updateStatus(status, task.status, true)
  }

  _write(s: string) {
    this.stderr.write(s, { log: false })
  }
}
