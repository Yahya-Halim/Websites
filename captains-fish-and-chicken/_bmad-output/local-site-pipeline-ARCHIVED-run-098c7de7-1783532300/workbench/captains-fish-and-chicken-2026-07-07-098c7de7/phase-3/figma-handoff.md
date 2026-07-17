# Optional Figma Handoff

Figma MCP / Code Connect are optional operator tools, not factory build requirements.

## Design Reference

- fileUrl:
- nodeId:
- mode: read-only

## Design Token Contract

- designTokenSource:
- designTokenExportPath:
- designTokenHash:
- Omit blank/null design-token fields from the sealed phase artifact when no handoff exists.

## Component Mapping References

## Sync Status

Only record pass, warning, not-run, or not-configured. Failed sync/export attempts must be fixed or omitted from the sealed artifact.

Do not paste access tokens, OAuth credentials, or private raw Figma file JSON into phase artifacts.
