// Requirements data with detailed information
const requirementsData = [
    {
        id: 1,
        title: "Widget Tree Structure",
        description: "Our application follows Flutter's widget tree architecture with proper hierarchical organization. Each screen is built as a tree of widgets with clear parent-child relationships, making the UI predictable and maintainable.",
        implementation: `// Example from student_home_screen.dart
Scaffold(
  appBar: AppBar(title: Text('Home')),
  body: ListView(
    children: [
      Card(
        child: Column(
          children: [
            Text('Welcome'),
            Row(children: [/* ... */]),
          ],
        ),
      ),
    ],
  ),
  floatingActionButton: FloatingActionButton(
    onPressed: () {},
    child: Icon(Icons.add),
  ),
)`,
        fileLocations: [
            "lib/features/home/presentation/screens/student_home_screen.dart",
            "lib/features/auth/presentation/screens/login_screen.dart",
            "lib/features/profile/presentation/screens/profile_screen.dart"
        ]
    },
    {
        id: 2,
        title: "Interactive UI",
        description: "Our UI is fully interactive with responsive buttons, form validation, gesture detection, and smooth animations. Users can tap, scroll, and interact with all elements seamlessly.",
        implementation: `// Example from login_screen.dart
TextFormField(
  controller: _emailController,
  decoration: InputDecoration(labelText: 'Email'),
  validator: (value) => value.isEmpty ? 'Required' : null,
),
ElevatedButton(
  onPressed: _isLoading ? null : _login,
  child: _isLoading 
      ? CircularProgressIndicator() 
      : Text('Login'),
),
IconButton(
  onPressed: () => setState(() => _isPasswordVisible = !_isPasswordVisible),
  icon: Icon(_isPasswordVisible ? Icons.visibility : Icons.visibility_off),
)`,
        fileLocations: [
            "lib/features/auth/presentation/screens/login_screen.dart",
            "lib/features/profile/presentation/screens/edit_profile_screen.dart",
            "lib/features/excuse/presentation/screens/submit_excuse_screen.dart"
        ]
    },
    {
        id: 3,
        title: "Theme Customization",
        description: "Users can switch between light and dark themes with persistent preferences. The app remembers the user's choice and applies it consistently across all screens.",
        implementation: `// Example from theme_provider.dart
class ThemeProvider with ChangeNotifier {
  ThemeMode _mode = ThemeMode.light;
  
  ThemeMode get mode => _mode;
  
  void toggleTheme() {
    _mode = _mode == ThemeMode.dark ? ThemeMode.light : ThemeMode.dark;
    notifyListeners();
    // Save to SharedPreferences
    _saveThemeToPrefs();
  }
}`,
        fileLocations: [
            "lib/core/providers/theme_provider.dart",
            "lib/main.dart",
            "lib/features/profile/presentation/screens/profile_screen.dart"
        ]
    },
    {
        id: 4,
        title: "Local Storage",
        description: "The app saves user preferences and data locally using SharedPreferences. This ensures that user settings persist between app sessions.",
        implementation: `// Example from theme_provider.dart
Future<void> _saveThemeToPrefs() async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString('theme', _mode.toString());
}

Future<void> _loadThemeFromPrefs() async {
  final prefs = await SharedPreferences.getInstance();
  final theme = prefs.getString('theme');
  if (theme != null) {
    _mode = theme == 'ThemeMode.dark' ? ThemeMode.dark : ThemeMode.light;
    notifyListeners();
  }
}`,
        fileLocations: [
            "lib/core/providers/theme_provider.dart",
            "lib/features/auth/data/services/auth_service.dart"
        ]
    },
    {
        id: 5,
        title: "Data Management",
        description: "We use Provider for state management and StreamBuilder for real-time data updates. This ensures efficient data flow and reactive UI updates.",
        implementation: `// Example using Provider
Consumer<ThemeProvider>(
  builder: (context, themeProvider, child) {
    return SwitchListTile(
      value: themeProvider.mode == ThemeMode.dark,
      onChanged: (value) => themeProvider.toggleTheme(),
    );
  },
)

// Example using StreamBuilder
StreamBuilder<List<ExcuseStatusModel>>(
  stream: ExcuseService.instance.getExcusesForUser(userId),
  builder: (context, snapshot) {
    if (snapshot.hasData) {
      return ListView.builder(
        itemCount: snapshot.data!.length,
        itemBuilder: (context, index) {
          return ExcuseCard(excuse: snapshot.data![index]);
        },
      );
    }
    return CircularProgressIndicator();
  },
)`,
        fileLocations: [
            "lib/core/providers/theme_provider.dart",
            "lib/features/excuse/presentation/screens/excuse_history_screen.dart",
            "lib/features/home/presentation/screens/student_home_screen.dart"
        ]
    },
    {
        id: 6,
        title: "Navigation",
        description: "Smooth navigation between screens with proper routing and transition animations. Users can easily move between different parts of the app.",
        implementation: `// Navigation examples
// Push to new screen
Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => ProfileScreen(user: user)),
);

// Push and replace current screen
Navigator.pushReplacement(
  context,
  MaterialPageRoute(builder: (context) => StudentHomeScreen(user: user)),
);

// Go back
Navigator.pop(context);`,
        fileLocations: [
            "lib/features/auth/presentation/screens/login_screen.dart",
            "lib/features/home/presentation/screens/student_home_screen.dart",
            "lib/features/profile/presentation/screens/profile_screen.dart"
        ]
    },
    {
        id: 7,
        title: "Core Functionality",
        description: "All main features are implemented and working correctly, including user authentication, attendance tracking, excuse management, and profile customization.",
        implementation: `// Authentication
Future<UserModel> login(String email, String password) {
  // Login logic
}

// Attendance tracking
Future<List<AttendanceRecord>> getAttendanceHistory(String userId) {
  // Get attendance records
}

// Excuse management
Future<bool> submitExcuse(ExcuseRequest request) {
  // Submit excuse logic
}

// Profile management
Future<void> updateProfile(UserModel user) {
  // Update profile logic
}`,
        fileLocations: [
            "lib/features/auth/data/services/auth_service.dart",
            "lib/features/attendance/data/services/attendance_service.dart",
            "lib/features/excuse/data/services/excuse_service.dart",
            "lib/features/profile/data/services/profile_service.dart"
        ]
    },
    {
        id: 8,
        title: "Error-Free Operation",
        description: "The application runs smoothly without crashes or errors. We've implemented proper error handling and created all necessary Firebase indexes.",
        implementation: `// Error handling example
try {
  final user = await AuthService.instance.login(email, password);
  // Navigate to home screen
} catch (e) {
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(
      content: Text(e.toString().replaceFirst('Exception: ', '')),
      backgroundColor: Colors.red,
    ),
  );
}

// Firebase indexes created:
// - excuses: userId + submissionDate
// - attendance: userId + date
// - schedules: userId + date`,
        fileLocations: [
            "lib/features/auth/presentation/screens/login_screen.dart",
            "lib/features/home/data/services/home_service.dart",
            "Firebase Console → Firestore → Indexes"
        ]
    },
    {
        id: 9,
        title: "API Integration",
        description: "The app connects to Firebase services for authentication, data storage, and file uploads. All API calls are properly handled with error management.",
        implementation: `// Firebase Auth integration
Future<UserModel> login(String email, String password) async {
  final userCredential = await _auth.signInWithEmailAndPassword(
    email: email, 
    password: password
  );
  // Get user data from Firestore
}

// Firestore integration
Stream<UserModel> getUserStream(String userId) {
  return _firestore
      .collection('users')
      .doc(userId)
      .snapshots()
      .map((snapshot) => UserModel.fromFirestore(snapshot.data()!, snapshot.id));
}

// Firebase Storage integration
Future<String> uploadProfilePhoto(File imageFile, String userId) async {
  final ref = _storage.ref().child('profile_photos/$userId/...');
  final task = await ref.putFile(imageFile);
  return await task.ref.getDownloadURL();
}`,
        fileLocations: [
            "lib/features/auth/data/services/auth_service.dart",
            "lib/features/profile/data/services/profile_service.dart",
            "lib/features/home/data/services/home_service.dart"
        ]
    },
    {
        id: 10,
        title: "Firebase Services",
        description: "We utilize multiple Firebase services including Authentication, Firestore, Storage, and App Check for a complete backend solution.",
        implementation: `// Firebase Services used:
// 1. Firebase Authentication - User login/signup
// 2. Cloud Firestore - Database for users, attendance, excuses
// 3. Firebase Storage - File uploads for profile pictures
// 4. App Check - Security protection

// Initialization in main.dart
await Firebase.initializeApp(
  options: DefaultFirebaseOptions.currentPlatform,
);

await FirebaseAppCheck.instance.activate(
  androidProvider: AndroidProvider.playIntegrity,
);`,
        fileLocations: [
            "lib/main.dart",
            "lib/firebase_options.dart",
            "All service files in lib/features/*/data/services/"
        ]
    }
];

// Function to generate modals
function generateModals() {
    const modalsContainer = document.getElementById('modals-container');
    
    requirementsData.forEach(req => {
        const modal = document.createElement('div');
        modal.id = `modal-${req.id}`;
        modal.className = 'modal';
        
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${req.title}</h2>
                    <button class="close-modal" data-modal="modal-${req.id}">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="modal-section">
                        <h3>Description</h3>
                        <p>${req.description}</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3>Implementation</h3>
                        <p>Here's how we implemented this requirement in our Flutter code:</p>
                        
                        <div class="code-block">
${req.implementation}
                        </div>
                    </div>
                    
                    <div class="modal-section">
                        <h3>File Locations</h3>
                        ${req.fileLocations.map(location => `<div class="file-path">${location}</div>`).join('')}
                    </div>
                </div>
            </div>
        `;
        
        modalsContainer.appendChild(modal);
    });
}

// Modal functionality
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Generate all modals
    generateModals();
    
    // Add click events to requirement cards
    document.querySelectorAll('.requirement-card').forEach(card => {
        card.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            openModal(modalId);
        });
    });
    
    // Add click events to close buttons
    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            closeModal(modalId);
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target.id);
        }
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Mobile menu toggle (placeholder)
    document.querySelector('.mobile-menu').addEventListener('click', function() {
        alert('Mobile menu would open here in a complete implementation');
    });
});