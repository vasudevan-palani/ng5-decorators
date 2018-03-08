import { Subject } from 'rxjs/Subject';

class SubjectHolder {
  static _eventHolder = [];
}

export function EmitBefore(eventName: string) {
    SubjectHolder._eventHolder[eventName] = new Subject();
    return function(value, propertyKey: string, descriptor: PropertyDescriptor) {
        let origFunction = descriptor.value;
        descriptor.value = function(...args) {
            SubjectHolder._eventHolder[eventName].next(...args);
            origFunction.call(value, ...args);
        }
    }
}

export function EmitAfter(eventName: string) {
    SubjectHolder._eventHolder[eventName] = new Subject();
    return function(value, propertyKey: string, descriptor: PropertyDescriptor) {
        let origFunction = descriptor.value;
        descriptor.value = function(...args) {
            origFunction.call(value, ...args);
            SubjectHolder._eventHolder[eventName].next(...args);
        }
    }
}

export function OnEvent(eventName: string) {
    return function(value, propertyKey: string, descriptor: PropertyDescriptor) {
        let origFunction = descriptor.value;
        SubjectHolder._eventHolder[eventName].subscribe(function(...args) {
            origFunction.call(value, ...args);
        });
    }
}
