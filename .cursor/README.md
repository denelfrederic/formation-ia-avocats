# 🎯 Règles Cursor - Formation IA Avocats

## 📋 Vue d'Ensemble

Ce projet utilise des règles Cursor spécialisées pour garantir la qualité du code et le respect des exigences pédagogiques et juridiques spécifiques à la formation IA pour avocats.

## 📁 Structure des Règles

### Règles Actives (alwaysApply: true)
- **`.cursor/rules/general-quality.mdc`** - Règles générales de qualité de code
- **`.cursor/rules/legal-ai-training.mdc`** - Règles spécialisées pédagogiques et juridiques

### Règles de Configuration (alwaysApply: false)
- **`.cursor/rules/legal-ai-training-config.mdc`** - Templates et configurations détaillées

## ⚖️ Domaines d'Application

### Focus Juridique
- **Droit des affaires** : contrats, sociétés, gouvernance
- **Contentieux civil** : procédures, preuves, plaidoiries
- **Contentieux commercial** : litiges B2B, arbitrage, médiation

### Aspects Pédagogiques
- Formation progressive et structurée
- Cas pratiques du monde réel
- Évaluation continue
- Templates de prompts spécialisés

## 🛠️ Utilisation Pratique

### Développement de Nouveaux Modules
1. **Respecter la structure** définie dans `legal-ai-training-config.mdc`
2. **Utiliser les templates** de composants pédagogiques
3. **Valider le contenu** avec un expert juridique
4. **Tester l'accessibilité** et la performance

### Bonnes Pratiques
```typescript
// ✅ CORRECT : Utilisation des types définis
interface Lesson {
  id: number;
  title: string;
  legalDomain: LegalDomain;
  objectives: string[];
}

// ❌ INCORRECT : Types non conformes
interface Lesson {
  name: string; // Devrait être 'title'
  domain: string; // Devrait être 'legalDomain' avec type spécifique
}
```

### Composants Canoniques Obligatoires
- `LessonCard` pour l'affichage des leçons
- `QuizComponent` pour les évaluations
- `ProgressTracker` pour le suivi pédagogique
- `ContentViewer` pour l'affichage du contenu

## 🔧 Configuration Requise

### Fichiers de Configuration Obligatoires
```typescript
// config/modules.ts - Structure des modules pédagogiques
export const modules: LegalModule[] = [
  {
    id: 1,
    title: "Module 1: Automatisation",
    legalDomains: ['droit-affaires'],
    difficulty: 'debutant',
    // ... autres propriétés
  }
];

// config/legal-domains.ts - Définition des domaines
export const legalDomains = [
  'droit-affaires',
  'contentieux-civil',
  'contentieux-commercial'
] as const;
```

### Types TypeScript
```typescript
// types/pedagogical.types.ts
export type LegalDomain = typeof legalDomains[number];
export type DifficultyLevel = 'debutant' | 'intermediaire' | 'avance' | 'expert';
export type ContentType = 'theorie' | 'pratique' | 'cas-pratique' | 'evaluation';
```

## 🚫 Règles Strictes

### Sécurité et Conformité
- ❌ **INTERDIT** : Données réelles de clients
- ✅ **OBLIGATOIRE** : Anonymisation systématique
- ✅ **REQUIS** : Mention "contenu pédagogique uniquement"
- ✅ **MANDATOIRE** : Respect du secret professionnel

### Qualité du Code
- ❌ **INTERDIT** : Hardcoding de contenu juridique
- ✅ **OBLIGATOIRE** : Fichiers de configuration séparés
- ✅ **REQUIS** : Validation TypeScript stricte
- ✅ **MANDATOIRE** : Tests unitaires

## 📊 Métriques de Qualité

### Performance Technique
- Bundle size < 500KB
- First Contentful Paint < 2s
- Lighthouse score > 90

### Qualité Pédagogique
- Taux d'achèvement > 80%
- Score quiz moyen > 75%
- Feedback utilisateurs > 4/5

## 🔄 Workflow de Développement

### Processus de Validation
1. **Développement** selon les règles spécialisées
2. **Revue de contenu** par expert juridique
3. **Tests pédagogiques** et techniques
4. **Revue de code** selon les bonnes pratiques
5. **Déploiement** progressif

### Maintenance
- Mise à jour trimestrielle des références juridiques
- Actualisation des exemples pratiques
- Intégration des retours utilisateurs
- Optimisation continue des performances

## 🎯 Points d'Attention

### Pour les Développeurs
- Toujours vérifier la compatibilité avec les règles générales
- Utiliser les composants canoniques existants
- Respecter la structure de fichiers définie
- Valider l'accessibilité et la performance

### Pour les Experts Juridiques
- Fournir des exemples anonymisés
- Valider la précision juridique
- S'assurer de la pédagogie progressive
- Vérifier la conformité déontologique

## 📞 Support et Évolution

### Mise à Jour des Règles
Les règles peuvent être mises à jour selon les besoins :
- Nouvelles fonctionnalités pédagogiques
- Évolution des normes juridiques
- Améliorations techniques
- Retours utilisateurs

### Contact
Pour toute question sur l'application des règles :
- Vérifier d'abord la documentation détaillée
- Consulter les exemples existants
- Proposer des améliorations documentées

---

**Version** : 1.0
**Dernière mise à jour** : Décembre 2024
**Domaine** : Formation IA pour avocats - Droit des affaires & Contentieux
