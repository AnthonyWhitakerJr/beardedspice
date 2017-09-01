//
//  NSApplication+Relaunch.swift
//  BeardedSpice
//
//  Created by Anthony Whitaker on 12/17/16.
//  Copyright © 2016 BeardedSpice. All rights reserved.
//

import Foundation
import AppKit

extension NSApplication {
    func relaunch(sender: AnyObject?) {
        let task = Process()
        // helper tool path
        task.launchPath = Bundle.main.path(forResource: "relaunch", ofType: nil)!
        // self PID as a argument
        task.arguments = [String(ProcessInfo.processInfo.processIdentifier)]
        task.launch()
    }
}
