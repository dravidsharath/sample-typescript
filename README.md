# Sample TS App: Task Manager

A basic TypeScript + React frontend application for managing tasks, designed to be verified and tested at full scale by the CodeValid platform.

## Objectives & Specification

### 1. Application Server Requirements
- **Server Port**: The application must run on port `6713` (`http://localhost:6713`).
- **Health Check Route**: Must expose `GET /health` which returns `{"status": "healthy"}` in JSON format.

### 2. Core Features & User Actions
Users must be able to perform the following operations:
1. **Add a Task**: Type a task title/description into the input and add it to the list.
2. **Toggle Completion**: Click a checkbox to mark a task as completed or active.
3. **Delete a Task**: Remove a task from the list.
4. **Filter Tasks**: Switch views between "All", "Active" (uncompleted), and "Completed" tasks.
5. **Clear Completed**: Remove all tasks that are currently completed.
6. **Task Counter**: Display the count of remaining active tasks.
7. **Task Priority [NEW]**: Set task priority level (Low, Medium, High) with colored badges.
8. **Search Filter [NEW]**: Search/filter tasks by name keyword dynamically.
9. **Task Due Dates [NEW]**: Assign calendar due dates to tasks, flagging overdue items.
10. **Task Inline Editing [NEW]**: Edit and update the name of any active task inline.
11. **Task Categorization (Tags) [NEW]**: Group tasks under custom categories ("Work", "Personal", etc.).

### 3. DOM Selectors & ID Mapping
To enable automated E2E tests, the application UI must expose the following DOM selectors exactly:
- **Input Field**: `id="todo-input"` (text input for new tasks)
- **Priority Selector [NEW]**: `id="todo-priority-select"` (drop-down select for priority: Low, Medium, High)
- **Due Date Selector [NEW]**: `id="todo-due-date-input"` (HTML date input selector)
- **Search Input [NEW]**: `id="todo-search-input"` (text input for keyword search filtering)
- **Category Selector [NEW]**: `id="todo-category-select"` (drop-down select for category tags)
- **Toggle All Checkbox [NEW]**: `id="toggle-all-checkbox"` (checkbox to toggle completion for all tasks)
- **Add Button**: `id="add-todo-btn"` (submits/adds the task)
- **List Container**: `id="todo-list"` (parent element list)
- **Individual Task Item**: `id="todo-item-{index}"` (where `{index}` is the 0-indexed position of the item in the list)
- **Task Item Checkbox**: `id="todo-checkbox-{index}"`
- **Task Item Text**: `id="todo-text-{index}"` (displays task name; style should show `line-through` when completed)
- **Task Priority Badge [NEW]**: `id="todo-priority-badge-{index}"` (displays "Low", "Medium", or "High")
- **Task Due Date Display [NEW]**: `id="todo-due-date-{index}"` (displays the due date)
- **Task Category Badge [NEW]**: `id="todo-category-badge-{index}"` (displays the tag/category value)
- **Edit Button [NEW]**: `id="edit-todo-btn-{index}"` (enters edit mode)
- **Edit Input Field [NEW]**: `id="todo-edit-input-{index}"` (text field for editing task name)
- **Save Button [NEW]**: `id="save-todo-btn-{index}"` (saves changes and exits edit mode)
- **Delete Button**: `id="delete-todo-btn-{index}"`
- **Remaining Count**: `id="todo-count"` (text must contain the number of active tasks, e.g., `"1 items left"`)
- **Filter "All" Button**: `id="filter-all"`
- **Filter "Active" Button**: `id="filter-active"`
- **Filter "Completed" Button**: `id="filter-completed"`
- **Clear Completed Button**: `id="clear-completed-btn"`

---

## Technical Stack
- **Framework**: React 18
- **Language**: TypeScript
- **Tooling**: Vite (configured with custom health-check middleware on port 6713)

## Running the Application Locally

### Installation
```bash
npm install
```

### Run Dev Server
```bash
npm run dev
```
Starts Vite listening on `http://localhost:6713`.

