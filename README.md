# Sample TypeScript App: Task Manager

A TypeScript + React frontend application for managing tasks, built as a target application for verification, feature testing, and automated E2E test script generation by the **CodeValid** platform.

---

## 🎯 Purpose & Specifications

### 1. Application Server Requirements
- **Server Port**: Runs on port `6713` (`http://localhost:6713`).
- **Health Check Route**: Exposes `GET /health` returning `{"status": "healthy"}` for platform container health checks.

### 2. Core Functional Features

#### Baseline Operations
1. **Add Task**: Enter task text into the input field and add it to the list.
2. **Toggle Completion**: Mark individual tasks as completed or active using checkboxes.
3. **Delete Task**: Remove tasks individually from the list.
4. **Filter Tasks**: Toggle between **All**, **Active** (uncompleted), and **Completed** views.
5. **Clear Completed**: Batch delete all completed tasks with a single action.
6. **Active Counter**: Dynamically displays remaining active items (`"X items left"`).

#### ✨ New Features Added
7. **Task Priority Level [NEW]**: Assign priority levels (**Low**, **Medium**, **High**) to tasks with color-coded visual badges (`id="todo-priority-select"`, `id="todo-priority-badge-{index}"`).
8. **Dynamic Keyword Search [NEW]**: Real-time task filtering via search input bar (`id="todo-search-input"`).
9. **Task Due Dates [NEW]**: Set target completion calendar dates for tasks (`id="todo-due-date-input"`, `id="todo-due-date-{index}"`).
10. **Task Categorization & Tags [NEW]**: Group tasks into tags like **Work**, **Personal**, and **General** (`id="todo-category-select"`, `id="todo-category-badge-{index}"`).
11. **Inline Task Title Editing [NEW]**: Double-click or click **Edit** to modify task names inline without deleting (`id="edit-todo-btn-{index}"`, `id="todo-edit-input-{index}"`, `id="save-todo-btn-{index}"`).
12. **Batch Toggle All [NEW]**: Master checkbox to instantly mark all tasks as completed or active (`id="toggle-all-checkbox"`).

---

## 🧪 DOM Selectors & E2E Contract

To enable deterministic automated UI testing (Playwright, Selenium, Cypress), the UI exposes explicit, immutable `id` attributes:

| Element | DOM Selector / ID | Status | Description |
| :--- | :--- | :---: | :--- |
| **New Task Input** | `id="todo-input"` | Core | Main input field for task creation |
| **Add Button** | `id="add-todo-btn"` | Core | Button to submit and add task to list |
| **Priority Selector** | `id="todo-priority-select"` | **[NEW]** | Dropdown selector (`Low`, `Medium`, `High`) |
| **Due Date Selector** | `id="todo-due-date-input"` | **[NEW]** | HTML date input field |
| **Category Selector** | `id="todo-category-select"` | **[NEW]** | Category tag selection dropdown |
| **Search Filter Input** | `id="todo-search-input"` | **[NEW]** | Search input for keyword filtering |
| **Toggle All Checkbox** | `id="toggle-all-checkbox"` | **[NEW]** | Master checkbox to select/deselect all |
| **Task List Container** | `id="todo-list"` | Core | Parent `<ul>` container |
| **Task Item** | `id="todo-item-{index}"` | Core | 0-indexed item container (`<li>`) |
| **Task Checkbox** | `id="todo-checkbox-{index}"` | Core | Completion checkbox for item `{index}` |
| **Task Title Text** | `id="todo-text-{index}"` | Core | Task title text (`line-through` when done) |
| **Priority Badge** | `id="todo-priority-badge-{index}"` | **[NEW]** | Color-coded priority indicator badge |
| **Due Date Display** | `id="todo-due-date-{index}"` | **[NEW]** | Formatted due date text |
| **Category Badge** | `id="todo-category-badge-{index}"` | **[NEW]** | Category tag badge |
| **Edit Button** | `id="edit-todo-btn-{index}"` | **[NEW]** | Triggers inline edit mode for item |
| **Edit Input Field** | `id="todo-edit-input-{index}"` | **[NEW]** | Input field when in edit mode |
| **Save Button** | `id="save-todo-btn-{index}"` | **[NEW]** | Saves inline edit changes |
| **Delete Button** | `id="delete-todo-btn-{index}"` | Core | Removes item `{index}` |
| **Remaining Count** | `id="todo-count"` | Core | Counter element (e.g. `"1 items left"`) |
| **Filter: All** | `id="filter-all"` | Core | Show all tasks |

| **Filter: Completed** | `id="filter-completed"` | Core | Show only completed tasks |
| **Clear Completed** | `id="clear-completed-btn"` | Core | Button to clear completed tasks |

---

## 🛠️ Technical Stack

- **Framework**: React 18
- **Language**: TypeScript 5+
- **Build Tool**: Vite (configured with custom health-check middleware on port 6713)

---

## 🏃 Running Locally

### Installation
```bash
cd sample-ts
npm install
```

### Development Server
```bash
npm run dev
```
The server will start listening at **`http://localhost:6713`**.

---

## 📄 License
MIT License
